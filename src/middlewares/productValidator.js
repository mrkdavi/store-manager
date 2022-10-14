const { baseError } = require('../utils/baseError');

const productValidator = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    const error = baseError('BAD_REQUEST', '"name" is required');
    return res.status(error.code).json(error.response);
  }
  if (name.length < 5) {
    const error = baseError(
      'UNPROCESSABLE_ENTITY',
      '"name" length must be at least 5 characters long',
    );
    return res.status(error.code).json(error.response);
  }

  next();
};

module.exports = productValidator;