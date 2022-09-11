const express = require("express");
const app = express();
const cors = require("cors");
const { dbconnection } = require("./database/db");
const Router = require("./routes/router");
process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;
const swaggerUi = require("swagger-ui-express")
const {swaggerDocument} = require("./swagger");
const  swaggerJsdoc = require("swagger-jsdoc")

const port = process.env.SERVER_PORT || 2000;
const specs = swaggerJsdoc(swaggerDocument);


dbconnection();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname+"/client"))
app.use(express.urlencoded({ extended: false }));
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(specs)
  );

  
  app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/client","index.html")
  })
app.use("/api/v1", Router);


app.listen(port, (err, success) => {
  if (err) throw err;
  console.log("server running on port " + port);
});
