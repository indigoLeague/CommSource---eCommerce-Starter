
const fs = require('fs');
const path = require('path');
const Item = require('../../database/models/item-model');

const itemController = {};

itemController.getItem = (req, res, next) => {
  console.log('!!!!!!! in item Controller');
};

module.exports = itemController;
