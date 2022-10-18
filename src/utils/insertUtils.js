const columns = (obj) =>
  Object.keys(obj)
    .map((key) => `${key}`)
    .join(', ');

const placeholders = (obj) =>
  Object.keys(obj)
    .map((_key) => '?')
    .join(', ');

const formattedColumns = (dataToUpdate) =>
  Object.keys(dataToUpdate)
    .map((key) => `${key} = ?`)
    .join(', ');

module.exports = {
  columns,
  placeholders,
  formattedColumns,
};