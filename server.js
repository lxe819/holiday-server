require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({ msg: "Holidays" });
});

app.listen(PORT, () => {
  log(`Express listing on ${PORT}`);
});
