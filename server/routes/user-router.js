const express = require('express');

const router = express.Router();
const userController = require('../controllers/user-controller');
const User = require('../../database/models/user-model');


router.post('/signup', userController.doesUserExist, (req, res, next) => {
  console.log('POST signup in user router');
  const newUser = new User({
    name: req.body.name, password: req.body.password, cartSession: {}, loginSession: req.session
  });
  newUser.save((err, user) => {
    if (err) return res.status(418).send(err);
  });
  res.redirect('/');
});

router.get('/signin', (req, res, next) => {
  console.log('GET signin in user router');
  return res.end();
  // res.render('../views/user/signup', {csrfToken: req.csrfToken()});
});

router.post('/signin', userController.validateUser, (req, res, next) => {
  console.log('POST signin in user router');
  res.redirect('/');
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
