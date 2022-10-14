const connection = require('../database/connection');
const { columns, placeholders } = require('../utils/insertUtils');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    `SELECT *
    FROM StoreManager.products
    ORDER BY id`,
  );
  return result;
};

const getProductsById = async (id) => {
  const [result] = await connection.execute(
    `SELECT *
    FROM StoreManager.products
    WHERE id = ?
    ORDER BY id`,
    [id],
  );
  return result[0];
};

const createProduct = async (productData) => {
  const [{ insertId }] = await connection.execute(
    `INSERT 
    INTO StoreManager.products (${columns(productData)})
    VALUE (${placeholders(productData)})`,
    [...Object.values(productData)],
  );
  return insertId;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};