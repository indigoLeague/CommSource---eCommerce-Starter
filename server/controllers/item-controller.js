
const fs = require('fs');
const path = require('path');
const Item = require('../../database/models/item-model');

const itemController = {};

itemController.getAllItems = async (req, res, next) => {
  // loads an array of items as objects
  await Item.find((err, suc) => {
    if (err) {
      return next(err);
    }
    res.locals.allItems = suc;
  });

  return next();
};

itemController.getItem = (req, res, next) => {
  console.log('getting item in item controller');
  const items = Item.find((err, suc) => {
    console.log('suc', suc);
  });
};

module.exports = itemController;
