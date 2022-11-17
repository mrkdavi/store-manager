const { saleProductModel, saleModel, productModel } = require('../models');
const { baseError } = require('../utils/baseError');
const formatSalesData = require('../utils/formatSalesData');
const formatUpdatedSaleData = require('../utils/formatUpdatedSaleData');
const verifyProducts = require('../utils/verifyProducts');

const createSales = async (productsData) => {
  const products = productsData.map(
    ({ productId }) => productModel.getProductsById(productId),
  );
  if (await verifyProducts(products)) return;

  const saleId = await saleModel.createSale();

  const saleData = productsData.map((product) => ({ saleId, ...product }));
  await saleProductModel.createSaleProduct(saleData);

  const results = await saleProductModel.getSaleById(saleId);

  return formatSalesData(results);
};

const getAllSales = async () => saleProductModel.getAllSalesProducts();

const getSaleProductById = async (saleId) => saleProductModel.getSaleProductById(saleId);

const deleteSale = async (id) => {
  await saleProductModel.deleteSaleProduct(id);
  const affectedRows = await saleModel.deleteSale(id);
  if (!affectedRows) return;
  return affectedRows;
};

const updateSale = async (saleId, productsData) => {
  const affectedRows = await saleProductModel.deleteSaleProduct(saleId);
  if (!affectedRows) return baseError('NOT_FOUND', 'Sale not found');

  const products = productsData.map(
    ({ productId }) => productModel.getProductsById(productId),
  );

  if (await verifyProducts(products)) return baseError('NOT_FOUND', 'Product not found');

  const saleData = productsData.map((product) => ({ saleId, ...product }));
  await saleProductModel.createSaleProduct(saleData);

  const results = await saleProductModel.getSaleById(saleId);

  return formatUpdatedSaleData(results);
};

module.exports = {
  createSales,
  getAllSales,
  getSaleProductById,
  deleteSale,
  updateSale,
};