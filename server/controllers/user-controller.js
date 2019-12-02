const { compareSync, hashSync } = require('bcryptjs');
const User = require('../../database/models/user-model');

const userController = {};

userController.getItem = (req, res, next) => {
  console.log('in user Controller');
};

// this middleware checks if user already exists
// almost same logic as validateUser, but with opposite intent
// if response is empty, run logic, otherwise error
userController.doesUserExist = async (req, res, next) => {
  if (req.body.name.length < 1 || req.body.password < 1) next({ error: 'User Input Invalid!' });
  await User.find({ name: req.body.name }, (err, succ) => {
    if (err) return next({ error: err.stack });

    if (succ[0] === undefined) {
      const sessionData = req.session;
      sessionData.username = req.body.name;
      next();
    } else {
      next({ error: 'User Already Exists!' });
    }
  });
};

userController.validateUser = async (req, res, next) => {
  // form input passed in as requests
  if (req.body.name.length < 1 || req.body.password < 1) next({ error: 'User Input Invalid!' });

  // first step to sign in is validating user by finding username in database
  // compareSync will match hashed password with form password
  // calling req.session object will send sessionToken when response is sent
  // in this case, req.session is passed to the next middleware
  await User.find({ name: req.body.name }, (err, succ) => {
    if (err) return next({ error: err.stack });

    if (succ[0] === undefined) {
      return next({ error: 'no user found' });
    }
    if (!compareSync(req.body.password, succ[0].password)) {
      return next({ error: 'no user found' });
    }
    console.log('SUCC', succ[0]);
    const sessionData = req.session;
    sessionData.username = req.body.name;
    sessionData.userId = succ[0]._id;
    sessionData.lastSession = succ[0].loginSession;
    console.log('Setting session data: ', sessionData.userId);
    next();
  });
};

module.exports = userController;
