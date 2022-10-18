const connection = require('../database/connection');

const createSale = async () => {
  const [{ insertId }] = await connection.execute(
    `INSERT 
    INTO StoreManager.sales (date)
    VALUE (NOW())`,
  );
  return insertId;
};

const deleteSale = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE
    FROM StoreManager.sales
    WHERE id = ?`,
    [id],
  );
  return affectedRows;
};

module.exports = {
  createSale,
  deleteSale,
};