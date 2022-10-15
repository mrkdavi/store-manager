const { baseError } = require('../utils/baseError');

const validateProductId = (productId) => {
  if (!productId) {
    return baseError('BAD_REQUEST', '"productId" is required');
  }
};

const validateQuantity = (quantity) => {
  if (quantity < 1) {
    return baseError(
      'UNPROCESSABLE_ENTITY',
      '"quantity" must be greater than or equal to 1',
    );
  }
  if (!quantity) {
    return baseError('BAD_REQUEST', '"quantity" is required');
  }
};

const validateIndex = (product) => {
  const { productId, quantity } = product;

  const productIdError = validateProductId(productId);
  const quantityError = validateQuantity(quantity);

  if (productIdError) {
    return productIdError;
  }
  
  if (quantityError) {
    return quantityError;
  }
};

const saleValidator = (req, res, next) => {
  const products = req.body;
  const isValid = products.every((product) => {
    const error = validateIndex(product);
    if (error) {
      res.status(error.code).json(error.response);
      return false;
    }
    return true;
  });

  if (isValid) next();
};

module.exports = saleValidator;
