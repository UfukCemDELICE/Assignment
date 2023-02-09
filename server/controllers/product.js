const Product = require('../models/product');


const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      newProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const getProduct = await Product.find(req.body);
    res.status(201).json({
      getProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      updateProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndRemove(id);
    res.status(201).json({
      message: 'Product deleted'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createProduct, getProduct, updateProduct, deleteProduct };