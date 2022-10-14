const { expect } = require("chai");
const { describe, it, afterEach } = require("mocha");
const sinon = require("sinon");

const { productModel } = require("../../../src/models");
const productService = require("../../../src/services/productService");

const products = require("../mocks/products.mock");

describe("productService", () => {
  afterEach(() => sinon.restore());

  it("getAllProducts", async () => {
    sinon.stub(productModel, "getAllProducts").resolves(products);
    const result = await productService.getAllProducts();
    expect(result).equal(products);
  });

  it("getProductsById", async () => {
    const id = 1;
    sinon.stub(productModel, "getProductsById").resolves(products[id - 1]);
    const result = await productService.getProductsById(id);
    expect(result).equal(products[id - 1]);
  });

  it("createProduct", async () => {
    const id = 3;

    sinon.stub(productModel, "createProduct").resolves(id);
    sinon.stub(productModel, "getProductsById").resolves(products[id - 1]);

    const result = await productService.createProduct(products[id - 1].name);
    expect(productModel.getProductsById).to.have.been.calledWith(id);
    expect(result).equal(products[id - 1]);
  });
});
