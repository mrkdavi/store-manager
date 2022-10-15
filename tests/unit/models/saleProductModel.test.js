const { expect } = require("chai");
const { describe, it, afterEach } = require("mocha");
const sinon = require("sinon");

const connection = require("../../../src/database/connection");
const saleProductModel = require("../../../src/models/saleProductModel");

const sales = require("../mocks/sales.mock");

describe('saleModel', () => {
  afterEach(() => sinon.restore());

  it("getSaleById", async () => {
    const saleId = 3;

    sinon.stub(connection, "execute").resolves([sales.salesSnakeCase]);

    const result = await saleProductModel.getSaleById(saleId);
    expect(result).to.deep.equal(sales.sales);
  });

  it("createSaleProduct", async () => {
    sinon.stub(connection, "execute").resolves(
      [{ affectedRows: sales.sales.length }]
    );

    const result = await saleProductModel.createSaleProduct(sales.sales);
    expect(result).equal(sales.sales.length);
  });
});