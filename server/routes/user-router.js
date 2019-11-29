const express = require('express');

const router = express.Router();
const userController = require('../controllers/user-controller');


router.post('/signup', userController.validateUser, (req, res, next) => {
  console.log('POST signup in user router');
  res.redirect('/');
});

router.get('/signin', (req, res, next) => {
  console.log('GET signin in user router');
  // res.render('../views/user/signup', {csrfToken: req.csrfToken()});
});

router.post('/signin', userController.validateUser, (req, res, next) => {
  console.log('POST signin in user router');
  res.redirect('/');
});

router.get('/logout', (req, res, next) => {
  console.log('GET logout in user router');
  res.redirect('/');
});

module.exports = router;
