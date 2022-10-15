const { expect } = require("chai");
const { describe, it, afterEach } = require("mocha");
const sinon = require("sinon");

const connection = require("../../../src/database/connection");
const saleModel = require("../../../src/models/saleModel");

describe('saleModel', () => {
  afterEach(() => sinon.restore());

  it("createSale", async () => {
    const insertId = 3;
    sinon.stub(connection, "execute").resolves([{ insertId }]);
    const result = await saleModel.createSale();
    expect(result).equal(insertId);
  });
});