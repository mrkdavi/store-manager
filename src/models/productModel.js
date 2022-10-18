const connection = require('../database/connection');
const { columns, placeholders, formattedColumns } = require('../utils/insertUtils');

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
    WHERE id = ?`,
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

const updateProduct = async (id, productData) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE StoreManager.products
    SET ${formattedColumns(productData)}
    WHERE id = ?`,
    [...Object.values(productData), id],
  );
  return affectedRows;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
};