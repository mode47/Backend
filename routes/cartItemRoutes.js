
const express = require('express');
const router = express.Router();
const CartItemContraller=require('../controllers/cartItemControllers');

// Add item to cart

router.post('/add-item', CartItemContraller.addItemController);
//get item from cart based on item  id
router.get('/get-item', CartItemContraller.getItemContrallerById);
router.get('/delete-item',CartItemContraller.deleteItemsControllerById);

router.get('/', CartItemContraller.getAllItemsController);

module.exports = router;



