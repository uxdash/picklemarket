const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find().populate('seller');
  res.send(products);
};

exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl, seller } = req.body;
  const product = new Product({ name, description, price, imageUrl, seller });
  await product.save();
  res.status(201).send(product);
};
