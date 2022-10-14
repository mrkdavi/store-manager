const productRouter = require('./productsRouter');

const createRouters = (app) => {
  app.use('/products', productRouter);
};
console.log('passei aqui =============');

module.exports = createRouters;