const { describe, it, afterEach } = require("mocha");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const {
  productModel,
  saleModel,
  saleProductModel,
} = require("../../../src/models");
const saleService = require("../../../src/services/saleService");

const products = require("../mocks/products.mock");
const sales = require("../mocks/sales.mock");

describe("[PASS] saleService", () => {
  afterEach(() => sinon.restore());

  it("createSales", async () => {
    const saleId = 3;

    sinon
      .stub(productModel, "getProductsById")
      .onCall(0)
      .resolves(products[0])
      .onCall(1)
      .resolves(products[1]);
    sinon.stub(saleModel, "createSale").resolves(saleId);
    sinon.stub(saleProductModel, "createSaleProduct").resolves();
    sinon.stub(saleProductModel, "getSaleById").resolves(sales.sales);

    const result = await saleService.createSales(sales.saleRequest);
    expect(saleModel.createSale).to.have.been.calledWith();
    expect(saleProductModel.createSaleProduct).to.have.been.calledWith(
      sales.sales
    );
    expect(saleProductModel.getSaleById).to.have.been.calledWith(saleId);
    expect(result).to.deep.equal(sales.saleResponse);
  });
});

describe("[FAIL] saleService", () => {
  afterEach(() => sinon.restore());

  it("createSales", async () => {
    const saleId = 3;

    sinon.stub(productModel, "getProductsById")
      .onCall(0).resolves(products[0])
      .onCall(1).resolves(undefined);

    sinon.stub(saleModel, "createSale").resolves(saleId);
    sinon.stub(saleProductModel, "createSaleProduct").resolves();
    sinon.stub(saleProductModel, "getSaleById").resolves(sales.sales);

    const result = await saleService.createSales(sales.saleRequest);
    expect(saleModel.createSale).to.have.not.been.called;
    expect(saleProductModel.createSaleProduct).to.have.not.been.called;
    expect(saleProductModel.getSaleById).to.have.not.been.called;
    expect(result).equal(undefined);
  });
});
