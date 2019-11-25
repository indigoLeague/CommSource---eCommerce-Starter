
const fs = require('fs');
const path = require('path');
const Item = require('../../database/models/item-model');

const itemController = {};

itemController.getItem = (req, res, next) => {
  console.log('!!!!!!! in item Controller');
  const items = Item.find((err, suc) => {
    console.log('suc', suc);
  });
};

module.exports = itemController;
