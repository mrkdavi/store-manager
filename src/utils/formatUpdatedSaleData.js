const formatUpdatedSaleData = (data) => ({
  saleId: data[0].saleId,
  itemsUpdated: data.map((da) => {
    const { saleId, ...rest } = da;
    return { ...rest };
  }),
});

module.exports = formatUpdatedSaleData;