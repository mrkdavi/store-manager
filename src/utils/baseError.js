const errors = {
  NOT_FOUND: 404,
};

const baseError = (code, message = '') => ({
  code: errors[code],
  response: { message },
});

module.exports = {
  errors,
  baseError,
};