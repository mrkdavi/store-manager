const { codes } = require('./statusCodes');

const baseError = (code, message = '') => ({
  code: codes[code],
  response: { message },
});

module.exports = {
  baseError,
};