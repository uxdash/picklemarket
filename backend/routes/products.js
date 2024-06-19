const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const product = new Product({ name, description, price, imageUrl });
  await product.save();
  res.status(201).send(product);
});

module.exports = router;
