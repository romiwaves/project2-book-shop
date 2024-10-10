const express = require('express');
const router = express.Router();
const {addToCart, getCartItem, removeCartItem} = require('../controller/CartController');

router.use(express.json());

router.post('/', addToCart);

router.get('/', getCartItem);

router.delete('/:id', removeCartItem);


module.exports = router