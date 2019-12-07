const { compareSync, hashSync } = require('bcryptjs');

const express = require('express');

const router = express.Router();
const userController = require('../controllers/user-controller');
const User = require('../../database/models/user-model');

// set sessionToken and userId cookie upon sign up
//
router.post('/signup', userController.doesUserExist, (req, res, next) => {
  console.log('POST signup in user router');
  req.body.password = hashSync(req.body.password, 10);
  const newUser = new User({
    name: req.body.name, password: req.body.password, cartSession: {}, loginSession: req.session
  });
  newUser.save((err, user) => {
    if (err) return res.status(418).send(err);
  });
  const sessionData = req.session;
  sessionData.userId = newUser._id;
  res.cookie('userId', [sessionData.userId, sessionData.username]);
  res.end();
});

router.get('/signin', (req, res, next) => {
  console.log('GET signin in user router');
  return res.end();
  // res.render('../views/user/signup', {csrfToken: req.csrfToken()});
});

router.post('/signin', userController.validateUser, (req, res, next) => {
  console.log('POST signin in user router');
  res.clearCookie('sessionToken');

  res.redirect('/');
});

router.post('/update', async (req, res, next) => {
  // console.log('COOKIES', req.session.username);

  await User.findOneAndUpdate({ name: req.session.username }, { cartSession: req.body.cart }, { returnOriginal: false }, (err, doc) => {
    if (err) {
      console.log('Something wrong when updating data!');
    }

    // console.log(doc);
  });

  res.end('updated');
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.clearCookie('userId');
    res.clearCookie('sessionToken');
    res.clearCookie('_csrf');
    return res.end();
  });
});

module.exports = router;
