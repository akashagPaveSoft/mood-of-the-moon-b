const express = require("express");
const cors = require("cors");

import { getMoonSectionData } from "./utils/astrologyCalculations.js";

const PORT = 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   const moonDetails = getMoonSectionData(new Date());
  //   console.log(moonDetails);
  //   res.send({ message: moonDetails });
  res.send("Hey this is my API running 🥳");
});

app.post("/custom-feeling", (req, res) => {
  const moonDetails = getMoonSectionData(req.body.date);
  res.send({ message: moonDetails });
});

module.exports = app;
