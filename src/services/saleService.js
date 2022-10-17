const { saleProductModel, saleModel, productModel } = require('../models');
const formatSalesData = require('../utils/formatSalesData');
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

module.exports = {
  createSales,
  getAllSales,
  getSaleProductById,
};