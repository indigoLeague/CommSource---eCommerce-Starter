const express = require('express');
const http = require('http');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const csrf = require('csurf');

const itemRouter = require('./routes/item-router');
const userRouter = require('./routes/user-router');
const User = require('../database/models/user-model');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  name: 'sessionToken',
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));

/* prevents cookie forgery from external sources such as ad click
   csrf must not be httpOnly, as it is intended to be read by client
   csrfProtection middleware provides Token method */
const csrfProtection = csrf({ cookie: true });

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', csrfProtection, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'), { csrfToken: req.csrfToken() });
});

app.get('/who', (req, res, next) => {
  if (req.cookies.sessionToken && req.session.userId) {
    User.find({ _id: req.session.userId }, (err, success) => {
      if (err) return next(err);
      return res.json({ user: success[0], session: req.sessionID });
    });
    // return res.json({ user: req.session.userId, session: req.sessionID });
  }
});

// app.use('/auth', csrfProtection, (req, res) => {
//   console.log('auth');
//   // const userInfo = User.find({ _id: req.session.userId });
//   // // console.log(req.session.userId);
//   // console.log(userInfo);
//   res.sendFile(path.resolve(__dirname, '../src/index.html'), { csrfToken: req.csrfToken() });
// });

app.use('/item', itemRouter, (req, res) => {
  console.log('item in server.js');
});

app.use('/user', userRouter, (req, res) => {
  console.log('user in server.js');
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('listening on 3000'));
