const { expect } = require("chai");
const { describe, it, afterEach } = require("mocha");
const sinon = require("sinon");

const connection = require("../../../src/database/connection");
const saleProductModel = require("../../../src/models/saleProductModel");

const sales = require("../mocks/sales.mock");

describe("saleProductModel", () => {
  afterEach(() => sinon.restore());

  it("getAllSales", async () => {
    sinon.stub(connection, "execute")
      .resolves([sales.salesSnakeCase]);

    const result = await saleProductModel.getAllSales();
    expect(result).to.deep.equal(sales.sales);
  });

  it("getSaleById", async () => {
    const saleId = 1;
    sinon.stub(connection, "execute")
      .resolves([sales.salesSnakeCase[saleId - 1]]);

    const result = await saleProductModel.getSaleById(saleId);
    expect(result).to.deep.equal(sales.sales[saleId - 1]);
  });

  it("getAllSalesProducts", async () => {
    sinon.stub(connection, "execute")
      .resolves([sales.getAllSalesSnakeCase]);

    const result = await saleProductModel.getAllSalesProducts();
    expect(result).to.deep.equal(sales.getAllSalesProductsResponse);
  });

  it("getSaleProductById", async () => {
    const saleId = 3;

    sinon.stub(connection, "execute").resolves([sales.salesSnakeCase]);

    const result = await saleProductModel.getSaleProductById(saleId);
    expect(result).to.deep.equal(sales.sales);
  });

  it("createSaleProduct", async () => {
    sinon
      .stub(connection, "query")
      .resolves([{ affectedRows: sales.sales.length }]);

    const result = await saleProductModel.createSaleProduct(sales.sales);
    expect(result).equal(sales.sales.length);
  });
});