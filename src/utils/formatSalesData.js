const formatSalesData = (data) => ({
    id: data[0].saleId,
    itemsSold: data.map((da) => {
      const { saleId, ...rest } = da;
      return { ...rest };
    }),
  });

module.exports = formatSalesData;