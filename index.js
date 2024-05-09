// index.js
const express = require("express");
import cors from "cors";
import { getMoonSectionData } from "./utils/astrologyCalculations.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HI! MY API IS RUNNING 👍");

  //   const moonDetails = getMoonSectionData(new Date());
  //   res.send({ message: moonDetails });
});

app.post("/custom-feeling", (req, res) => {
  console.log("Insideeee Custom Feelingggg API -----> ", req.body.date);
  const moonDetails = getMoonSectionData(req.body.date);
  res.send({ message: moonDetails });
});

module.exports = app;
