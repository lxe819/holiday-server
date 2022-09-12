//* Dependencies
  require("dotenv").config();
  const express = require("express");
  const morgan = require("morgan");
  const cors = require("cors"); 
  const mongoose = require("mongoose"); 

//* Configuration
  const PORT = process.env.PORT ?? 3000;
  const mongoURI = process.env.mongoURI ?? "mongodb://localhost:27017/holidays"
  const app = express();

//* Connecting mongoose to mongoDB
  mongoose.connect(mongoURI); 
  mongoose.connection.on("error", (err) =>
    console.log(err.message + " is Mongod not running?")
  );
  mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
  mongoose.connection.once("open", () => {
    console.log("connected to mongoose...");
  });

app.use(morgan("dev"));
app.use(cors()); 

app.get("/", (req, res) => {
  res.send({ msg: "Holidays" });
  // res.send("Holidays"); --> this is NOT .json
});

app.listen(PORT, () => {
  console.log(`Express listing on ${PORT}`);
});
