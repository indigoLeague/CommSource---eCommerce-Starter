const User = require('../../database/models/user-model');

const userController = {};

userController.getItem = (req, res, next) => {
  console.log('in user Controller');
};

userController.doesUserExist = async (req, res, next) => {
  await User.find({ name: req.body.name }, (err, succ) => {
    if (err) return next({ error: err.stack });

    if (succ[0] === undefined) {
      const sessionData = req.session;
      sessionData._id = req.body.name;
      next();
    } else {
      next({ error: 'User Already Exists!' });
    }
  });
};

userController.validateUser = async (req, res, next) => {
  await User.find({ name: req.body.name, password: req.body.password }, (err, succ) => {
    if (err) return next({ error: err.stack });

    if (succ[0] === undefined) {
      return next({ error: 'no user found' });
    }
    const sessionData = req.session;
    sessionData.userId = succ[0]._id;
    console.log('Setting session data: ', sessionData.userId);
    next();
  });
};

module.exports = userController;
