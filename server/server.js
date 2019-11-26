const express = require('express');
const http = require('http');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const itemRouter = require('./routes/item-router');
const userRouter = require('./routes/user-router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.use('/item', itemRouter, (req, res) => {
  console.log('retrieved item in server.js');
});

app.use('/user', userRouter, (req, res) => {
  console.log('retrieved user in server.js');
});

app.listen(3000, () => console.log('listening on 3000'));
