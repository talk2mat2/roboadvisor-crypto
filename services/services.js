const stocks = require("../models/stocks");

exports.fetchAllStocks = async () => {
  return await stocks
    .find({})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
