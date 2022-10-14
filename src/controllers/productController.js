const { productService } = require('../services');
const { baseError } = require('../utils/baseError');
const { codes } = require('../utils/statusCodes');

const getAllProducts = async (_req, res) => {
  const products = await productService.getAllProducts();
  res.status(codes.OK).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductsById(+id);
  if (!product) {
    const error = baseError('NOT_FOUND', 'Product not found');
    return res.status(error.code).json(error.response);
  }
  res.status(codes.OK).json(product);
};

module.exports = {
  getAllProducts,
  getProductsById,
};