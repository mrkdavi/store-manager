const { expect } = require("chai");
const { describe, it, afterEach } = require("mocha");
const sinon = require("sinon");

const connection = require("../../../src/database/connection");
const saleModel = require("../../../src/models/saleModel");
const sales = require("../mocks/sales.mock");

describe('saleModel', () => {
  afterEach(() => sinon.restore());

  // it("getAllSales", async () => {
  //   sinon.stub(connection, "execute").resolves([sales.getAllSaleResponse]);

  //   const result = await saleProductModel.getAllSales();
  //   expect(result).to.deep.equal(sales.getAllSaleResponse);
  // });

  // it("getSaleById", async () => {
  //   const id = 3;

  //   sinon.stub(connection, "execute").resolves([sales.getSaleByIdResponse]);

  //   const result = await saleProductModel.getSaleById(id);
  //   expect(result).equal(sales.getSaleByIdResponse);
  // });

  it("createSale", async () => {
    const insertId = 3;
    sinon.stub(connection, "execute").resolves([{ insertId }]);
    const result = await saleModel.createSale();
    expect(result).equal(insertId);
  });
});