const express = require("express");
const cors = require("cors");

// import { getMoonSectionData } from "./utils/astrologyCalculations.js";

const PORT = 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
  //   const moonDetails = getMoonSectionData(new Date());

  //   res.send({ message: moonDetails });
});

app.post("/custom-feeling", (req, res) => {
  //   const moonDetails = getMoonSectionData(req.body.date);
  //   res.send({ message: moonDetails });
});

module.exports = app;
