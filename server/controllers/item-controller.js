const Item = require('../../database/models/item-model');

const itemController = {};

// we need to await loading all items from db before moving back to item-router
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

itemController.buyItems = (req, res, next) => {
  const toBeUpdated = Object.entries(req.body);

  for (let i = 0; i < toBeUpdated.length; i++) {
    const currentTBU = toBeUpdated[i];

    // query database for particular item that matches currentTBU name

    Item.find({ name: currentTBU[0] }, (err, succ) => {
      const oldQuantity = succ[0].quantity;
      const newQuantity = oldQuantity - currentTBU[1].quantity;

      if (newQuantity < 0) return next({ error: `unable to checkout; item ${currentTBU[0]} is out of stock` });

      // update that particular item's quantity by subtracting
      Item.update({ name: succ[0].name }, { quantity: newQuantity }, (er, suc) => {
        if (err) {
          next(err);
        } else {
          next();
        }
      });
    });
  }
};

// itemController.getItem = (req, res, next) => {
//   console.log('getting item in item controller');
//   const items = Item.find((err, suc) => {
//     console.log('suc', suc);
//   });
// };

module.exports = itemController;
