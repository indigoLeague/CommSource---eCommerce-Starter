const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item-controller');

router.get('/loaditems', itemController.getAllItems, (req, res, next) => {
  console.log('load all items in item router');
  res.status(200).send(res.locals.allItems);
});

router.get('/:id', itemController.getItem, (req, res, next) => {
  console.log('retrieved item in item router');
});

module.exports = router;
