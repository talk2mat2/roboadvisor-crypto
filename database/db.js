const mongose = require("mongoose");
process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;

const dburl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gussd.mongodb.net/appdb`

exports.dbconnection = async () => {
  await mongose.connect(dburl, (err, success) => {
    if (err) throw err;
    console.log("database connected successfully");
  });
};


