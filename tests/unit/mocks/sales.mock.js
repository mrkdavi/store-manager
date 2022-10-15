const sales = [
  {
    saleId: 3,
    productId: 1,
    quantity: 1,
  },
  {
    saleId: 3,
    productId: 2,
    quantity: 5,
  },
];

const salesSnakeCase = [
  {
    sale_id: 3,
    product_id: 1,
    quantity: 1,
  },
  {
    sale_id: 3,
    product_id: 2,
    quantity: 5,
  },
];

const saleRequest = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleResponse = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

module.exports = {
  sales,
  saleRequest,
  saleResponse,
  salesSnakeCase,
};
