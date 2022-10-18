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

const updateProduct = async (id, productData) => {
  const affectedRows = await productModel.updateProduct(id, productData);
  if (!affectedRows) return;
  const result = await productModel.getProductsById(id);
  return result;
};

const deleteProduct = async (id) => {
  const affectedRows = await productModel.deleteProduct(id);
  if (!affectedRows) return;
  return affectedRows;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};