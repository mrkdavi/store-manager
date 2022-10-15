const productRouter = require('./productsRouter');
const salesRouter = require('./salesRouter');

const createRouters = (app) => {
  app.use('/products', productRouter);
  app.use('/sales', salesRouter);
};

module.exports = createRouters;