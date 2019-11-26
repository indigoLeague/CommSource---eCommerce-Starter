const fs = require('fs');
const path = require('path');
const User = require('../../database/models/user-model');

const userController = {};

userController.getItem = (req, res, next) => {
  console.log('in user Controller');
};

userController.validateUser = (req, res, next) => {
  // some validation logic

  next();
};

module.exports = userController;
