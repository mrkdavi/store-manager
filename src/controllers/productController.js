const { productService } = require('../services');
const { baseError } = require('../utils/baseError');

const getAllProducts = async (_req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductsById(+id);
  if (!product) {
    const error = baseError('NOT_FOUND', 'Product not found');
    return res.status(error.code).json(error.response);
  }
  res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getProductsById,
};