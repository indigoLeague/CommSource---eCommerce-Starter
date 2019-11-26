const express = require('express');

const router = express.Router();
const csurf = require('csurf');
const userController = require('../controllers/user-controller');

// csrf middleware token for session storage
const csrf = csurf();

// make all routes protected by csrf protection
router.use(csrf);

router.get('/signup', (req, res, next) => {
  console.log('GET signup in user router');
  // render signup view
  // res.render('../views/user/signup', {csrfToken: req.csrfToken()});
});

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
});

router.get('/logout', (req, res, next) => {
  console.log('GET logout in user router');
  res.redirect('/');
});

module.exports = router;
