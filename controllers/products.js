const { Product } = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      pageTitle: 'Products Page',
      path: '/',
      products: products,
    });
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render('shopForm', {
    pageTitle: 'Add Product',
    path: 'admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  if (req.body.product.trim()[0]) {
    const product = new Product(req.body.product);
    product.save();
    res.redirect('/');
  }
};
