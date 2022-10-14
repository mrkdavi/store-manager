const { productModel } = require('../models');

const getAllProducts = async () => {
  const result = await productModel.getAllProducts();
  return result;
};

const getProductsById = async (id) => {
  const result = await productModel.getProductsById(id);
  return result;
};

const createProduct = async (productData) => {
  const insertId = await productModel.createProduct(productData);
  const result = await productModel.getProductsById(insertId);
  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};