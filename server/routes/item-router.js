const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item-controller');

router.get('/:id', itemController.getItem, (req, res, next) => {
  console.log('retrieved item in item router');
});

module.exports = router;
