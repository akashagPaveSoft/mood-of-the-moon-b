import express from "express";
import cors from "cors";
import { getMoonSectionData } from "./utils/astrologyCalculations.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
  const moonDetails = getMoonSectionData(new Date());

  res.send({ message: moonDetails });
});

app.post("/custom-feeling", (req, res) => {
  const moonDetails = getMoonSectionData(req.body.date);
  res.send({ message: moonDetails });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
