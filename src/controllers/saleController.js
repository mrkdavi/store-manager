const { saleService } = require('../services');
const { codes } = require('../utils/statusCodes');
const { baseError } = require('../utils/baseError');

const createSales = async (req, res) => {
  const sales = await saleService.createSales(req.body);
  if (!sales) {
    const error = baseError('NOT_FOUND', 'Product not found');
    return res.status(error.code).json(error.response);
  }
  res.status(codes.CREATED).json(sales);
};

module.exports = {
  createSales,
};
