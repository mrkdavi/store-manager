const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const chai = require("chai");
const { describe, it, afterEach } = require("mocha");

const { expect } = chai;
chai.use(sinonChai);

const { productService } = require("../../../src/services");
const productController = require("../../../src/controllers/productController");

const products = require("../mocks/products.mock");
const { codes } = require("../../../src/utils/statusCodes");
const { baseError } = require("../../../src/utils/baseError");

describe("productController pass", () => {
  afterEach(() => sinon.restore());

  it("getAllProducts", async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "getAllProducts").resolves(products);

    await productController.getAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(codes.OK);
    expect(res.json).to.have.been.calledWith(products);
  });

  it("getProductsById", async () => {
    const req = {
      params: { id: '1' },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    const product = products[req.params.id - 1];
    sinon.stub(productService, "getProductsById").resolves(product);

    await productController.getProductsById(req, res);
    expect(productService.getProductsById).to.have.been
      .calledWith(+req.params.id);
    expect(res.status).to.have.been.calledWith(codes.OK);
    expect(res.json).to.have.been.calledWith(product);
  });
});

describe("productController fail", () => {
  afterEach(() => sinon.restore());

  it("getProductsById fail", async () => {
    const req = {
      params: { id: '1' },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    const product = products[req.params.id - 1];
    sinon.stub(productService, "getProductsById").resolves();
    const error = baseError("NOT_FOUND", "Product not found");

    await productController.getProductsById(req, res);
    expect(productService.getProductsById).to.have.been.calledWith(
      +req.params.id
    );
    expect(res.status).to.have.been.calledWith(error.code);
    expect(res.json).to.have.been.calledWith(error.response);
  });
});