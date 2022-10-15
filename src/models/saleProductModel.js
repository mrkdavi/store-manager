const { snakefy } = require('snakelize');
const camelize = require('camelize');
const connection = require('../database/connection');
const { columns } = require('../utils/insertUtils');

const getSaleById = async (saleId) => {
  const [results] = await connection.execute(
    `SELECT *
    FROM StoreManager.sales_products
    WHERE sale_id = ?
    ORDER BY sale_id`,
    [saleId],
  );
  return camelize(results);
};

const createSaleProduct = async (salesData) => {
  const [{ affectedRows }] = await connection.query(
    `INSERT 
    INTO StoreManager.sales_products (${columns(snakefy(salesData[0]))})
    VALUES ?`,
    [[...salesData.map((sale) => [...Object.values(sale)])]],
  );
  return affectedRows;
};

module.exports = {
  getSaleById,
  createSaleProduct,
};