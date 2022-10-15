const verifyProducts = async (products) => {
  const productsResolved = await Promise.all(products);
  return productsResolved.some((product) => product === undefined);
};

module.exports = verifyProducts;