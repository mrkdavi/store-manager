const connection = require('../database/connection');

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

module.exports = {
  getAllProducts,
  getProductsById,
};