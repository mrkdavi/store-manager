const columns = (obj) =>
  Object.keys(obj)
    .map((key) => `${key}`)
    .join(', ');

const placeholders = (obj) =>
  Object.keys(obj)
    .map((_key) => '?')
    .join(', ');

module.exports = {
  columns,
  placeholders,
};