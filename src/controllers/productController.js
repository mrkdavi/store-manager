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

const createProduct = async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(codes.CREATED).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productService.updateProduct(id, req.body);
  if (!product) {
    const error = baseError('NOT_FOUND', 'Product not found');
    return res.status(error.code).json(error.response);
  }
  res.status(codes.OK).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productService.deleteProduct(id, req.body);
  if (!product) {
    const error = baseError('NOT_FOUND', 'Product not found');
    return res.status(error.code).json(error.response);
  }
  res.status(codes.NO_CONTENT).end();
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};