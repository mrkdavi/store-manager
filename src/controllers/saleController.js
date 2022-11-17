const { saleService } = require('../services');
const { codes } = require('../utils/statusCodes');
const { baseError } = require('../utils/baseError');

const createSales = async (req, res) => {
  const sale = await saleService.createSales(req.body);
  if (!sale) {
    const error = baseError('NOT_FOUND', 'Product not found');
    return res.status(error.code).json(error.response);
  }
  res.status(codes.CREATED).json(sale);
};

const getAllSales = async (req, res) => {
  const sales = await saleService.getAllSales();
  res.status(codes.OK).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const product = await saleService.getSaleProductById(+id);
  if (!product.length) {
    const error = baseError('NOT_FOUND', 'Sale not found');
    return res.status(error.code).json(error.response);
  }
  res.status(codes.OK).json(product);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.deleteSale(id, req.body);
  if (!sale) {
    const error = baseError('NOT_FOUND', 'Sale not found');
    return res.status(error.code).json(error.response);
  }
  res.status(codes.NO_CONTENT).end();
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.updateSale(id, req.body);
  if (sale.code) {
    return res.status(sale.code).json(sale.response);
  }
  res.status(codes.OK).json(sale);
};

module.exports = {
  createSales,
  getAllSales,
  getSaleById,
  deleteSale,
  updateSale,
};
