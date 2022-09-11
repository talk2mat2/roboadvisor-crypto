
const express = require("express");
const { fetchStocks } = require("../controller/stocksController");

const Router = express.Router();



Router.get("/stocks", fetchStocks);

module.exports = Router;


