const { response } = require("express");
const stocks = require("../models/stocks");
const { fetchAllStocks } = require("../services/services");
const { responseData } = require("../helpers/helpers")();

exports.fetchStocks = async (request, response) => {
  try {
    const allData = await fetchAllStocks();
    return response
      .status(200)
      .json(
        new responseData(true, "successfullr retrieve all data", allData)
      );
  } catch (err) {
    return response
      .status(504)
      .json(new responseData(false, "unable to retrieve all data", []));
  }
};
