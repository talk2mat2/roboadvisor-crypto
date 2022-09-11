const mongoose = require("mongoose");

const { Schema } = mongoose;

const stocks = new Schema({
  "Risk Score/Tolerence": { type: Number },
  "Nigerian Stocks": { type: Number },
  "Foriegn Stocks": { type: Number },
  "Tech Stocks": { type: Number},
  "Emerging Stocks": { type: Number },
  "Nigerian Bonds": { type: Number },
  "Foriegn Bonds": { type: Number },
  Commodities: { type: Number },
  "Real Estate": { type: Number },
  "T-Bills": { type: Number },
  Alternative: { type: Number },
});

module.exports = mongoose.model("stocks", stocks);
