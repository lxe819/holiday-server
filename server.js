require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); 

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(morgan("dev"));
app.use(cors()); 

app.get("/", (req, res) => {
  res.send({ msg: "Holidays" });
  // res.send("Holidays"); --> this is NOT .json
});

app.listen(PORT, () => {
  console.log(`Express listing on ${PORT}`);
});
