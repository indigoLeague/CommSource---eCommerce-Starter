const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item-controller');

// route to load all items from db
router.get('/loaditems', itemController.getAllItems, (req, res, next) => {
  res.status(200).send(res.locals.allItems);
});

router.post('/buyitems', itemController.getAllItems, itemController.buyItems, (req, res, next) => {
  console.log('in router post: buy items, item-router');
});

// router.get('/:id', itemController.getItem, (req, res, next) => {
//   console.log('retrieved item in item router');
// });

module.exports = router;
