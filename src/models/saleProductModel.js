const { snakefy } = require('snakelize');
const camelize = require('camelize');
const connection = require('../database/connection');
const { columns } = require('../utils/insertUtils');

const getAllSales = async () => {
  const [results] = await connection.execute(
    `SELECT *
    FROM StoreManager.sales_products`,
  );
  return camelize(results);
};

const getAllSalesProducts = async () => {
  const [results] = await connection.execute(
    `SELECT sp.*, s.date
    FROM StoreManager.sales_products sp
    INNER JOIN StoreManager.sales s
    ON s.id = sp.sale_id`,
  );
  return camelize(results);
};

const getSaleProductById = async (saleId) => {
  const [results] = await connection.execute(
    `SELECT s.date, sp.product_id, sp.quantity
    FROM StoreManager.sales_products sp
    INNER JOIN StoreManager.sales s
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?`,
    [saleId],
  );
  return camelize(results);
};

const getSaleById = async (saleId) => {
  const [results] = await connection.execute(
    `SELECT *
    FROM StoreManager.sales_products
    WHERE sale_id = ?
    ORDER BY sale_id`,
    [saleId],
  );
  console.log(results);
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

const deleteSaleProduct = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE
    FROM StoreManager.sales_products
    WHERE sale_id = ?`,
    [id],
  );
  return affectedRows;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSaleProduct,
  getAllSalesProducts,
  getSaleProductById,
  deleteSaleProduct,
};