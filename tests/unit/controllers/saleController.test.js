const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const chai = require("chai");
const { describe, it, afterEach } = require("mocha");

const { expect } = chai;
chai.use(sinonChai);

const saleService = require("../../../src/services/saleService");
const saleController = require("../../../src/controllers/saleController");

const sales = require("../mocks/sales.mock");
const { codes } = require("../../../src/utils/statusCodes");
const { baseError } = require("../../../src/utils/baseError");

describe("[PASS] saleController", () => {
  afterEach(() => sinon.restore());

  it("getAllSales", async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, "getAllSales").resolves(sales.getAllSalesResponse);

    await saleController.getAllSales(req, res);
    expect(saleService.getAllSales).to.have.been.called;
    expect(res.status).to.have.been.calledWith(codes.OK);
    expect(res.json).to.have.been.calledWith(sales.getAllSalesResponse);
  });

  // it("getSaleById", async () => {
  //   const req = {
  //     params: { id: '1' },
  //   };
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(saleService, "getSaleById").resolves(sales.getSaleByIdResponse);

  //   await saleController.getSaleById(req, res);
  //   expect(saleService.getSaleById).to.have.been.calledWith(+req.params.id);
  //   expect(res.status).to.have.been.calledWith(codes.OK);
  //   expect(res.json).to.have.been.calledWith(sales.getSaleByIdResponse);
  // });

  it("createProduct", async () => {
    const id = 1;

    const req = {
      body: sales.saleRequest,
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, "createSales").resolves(sales.saleResponse);
    await saleController.createSales(req, res);
    expect(saleService.createSales).to.have.been.calledWith(req.body);
    expect(res.status).to.have.been.calledWith(codes.CREATED);
    expect(res.json).to.have.been.calledWith(sales.saleResponse);
  });
});

describe("[FAIL] productController", () => {
  afterEach(() => sinon.restore());

  it("getProductsById", async () => {
    const req = {
      params: { id: '1' },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, "createSales").resolves();
    const error = baseError("NOT_FOUND", "Product not found");

    await saleController.createSales(req, res);
    expect(saleService.createSales).to.have.been.calledWith(req.body);
    expect(res.status).to.have.been.calledWith(error.code);
    expect(res.json).to.have.been.calledWith(error.response);
  });

  // it("getSaleById", async () => {
  //   const req = {
  //     params: { id: "1" },
  //   };
  //   const res = {};
  //   const error = baseError("NOT_FOUND", "Sale not found");

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(saleService, "getSaleById").resolves();

  //   await saleController.getSaleById(req, res);
  //   expect(saleService.getSaleById).to.have.been.calledWith(+req.params.id);
  //   expect(res.status).to.have.been.calledWith(error.code);
  //   expect(res.json).to.have.been.calledWith(error.response);
  // });
});