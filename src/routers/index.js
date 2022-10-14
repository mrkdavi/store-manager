const productRouter = require('./productsRouter');

const createRouters = (app) => {
  app.use('/products', productRouter);
};

module.exports = createRouters;