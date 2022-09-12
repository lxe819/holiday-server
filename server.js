/**************************************************************
Set-up & Configuration
**************************************************************/
//* Dependencies
  require("dotenv").config();
  const express = require("express");
  const morgan = require("morgan");
  const cors = require("cors"); 
  const mongoose = require("mongoose"); 
  const Country = require("./models/Country");

//* Configuration
  const PORT = process.env.PORT ?? 3000;
  const mongoURI = process.env.mongoURI 
  // ?? "mongodb://localhost:27017/holidays"
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


/**************************************************************
Code
**************************************************************/
app.get("/", (req, res) => {
  res.json({ msg: "Holidays" });
  // res.send("Holidays"); --> this is NOT .json
});

app.get("/countries/seed", async (req, res) => {
  const countries = [
    {
      title: "Singapore"
    }, 
    {
      title: "Italy"
    }, 
    {
      title: "Thailand"
    }, 
  ]; 

  await Country.deleteMany({});
  
  const result = await Country.insertMany(countries); 
  res.json(result); 
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express listing on ${PORT}`);
});
