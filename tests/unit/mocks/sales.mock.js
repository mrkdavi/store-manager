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

const getAllSalesResponse = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 5,
  },
];

const getSaleProductByIdResponse = [
  {
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 5,
  },
];

const getAllSaleResponse = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
  },
  {
    saleId: 2,
    date: "2021-09-09T04:54:54.000Z",
  },
];

const getSaleByIdResponse = {
  saleId: 1,
  date: "2021-09-09T04:54:54.000Z",
};

module.exports = {
  sales,
  saleRequest,
  saleResponse,
  salesSnakeCase,
  getAllSaleResponse,
  getAllSalesResponse,
  getSaleByIdResponse,
  getSaleProductByIdResponse,
};
