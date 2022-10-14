const { expect } = require("chai");
const { describe, it, afterEach } = require("mocha");
const sinon = require("sinon");

const connection = require("../../../src/database/connection");
const productModel = require("../../../src/models/productModel");

const products = require("../mocks/products.mock");

describe('productModel', () => {
  afterEach(() => sinon.restore());

  it("getAllProducts", async  () => {
    sinon.stub(connection, "execute").resolves([products]);

    const result = await productModel.getAllProducts();
    expect(result).equal(products);
  });

  it("getProductsById", async () => {
    const id = 1;

    sinon.stub(connection, "execute").resolves([[products[id - 1]]]);

    const result = await productModel.getProductsById(id);
    expect(result).equal(products[id - 1]);
  });

  it("createProduct", async () => {
    const id = 3;
    sinon.stub(connection, "execute").resolves([{ insertId: 3 }]);
    const result = await productModel.createProduct(products[id - 1]);
    expect(result).equal(3);
  });
});