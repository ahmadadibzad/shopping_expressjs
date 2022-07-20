const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category');
const productController = require('../controllers/product');
const cartController = require('../controllers/cart');
const orderController = require('../controllers/order');

router.get('/', productController.getIndex);

router.get('/product/:id', productController.getProduct);

router.get('/category/:id', categoryController.getCategory);

router.get('/cart', cartController.getCart);
router.post('/cart/add', cartController.postAddToCart);
router.post('/cart/remove', cartController.postRemoveFromCart);

router.get('/orders', orderController.getOrders);
router.post('/order', orderController.postOrder);

module.exports = router;
