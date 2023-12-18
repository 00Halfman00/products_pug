const express = require('express');
const router = express.Router();

const { getAddProduct, postAddProduct } = require('../controllers/products');

router.get('/add-product', getAddProduct);

router.post('/add-product', postAddProduct);

exports.adminRoute = router;
