const connection = require('../database/connection');

const createSale = async () => {
  const [{ insertId }] = await connection.execute(
    `INSERT 
    INTO StoreManager.sales (date)
    VALUE (NOW())`,
  );
  return insertId;
};

module.exports = {
  createSale,
};