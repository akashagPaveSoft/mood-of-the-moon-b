import express from "express";
import sweph, { constants } from "sweph";
import cors from "cors";
import {
  getDetailsOfAllPlanets,
  calculateNextFeeling,
  convertDateTimeToJulian,
  getMoonSectionData,
  calculatePlanetPositionDetails,
  ephemerisCalculations,
} from "./utils/astrologyCalculations.js";

const PORT = process.env.PORT || 3001;

export const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // console.log("Inside / req----> ", req);
  const moonDetails = getMoonSectionData(new Date());
  // console.log("Moon Details insde index.js -> ", moonDetails);

  res.send({ message: moonDetails });
});

app.post("/custom-feeling", (req, res) => {
  console.log("Insideeee Custom Feelingggg API -----> ", req.body.date);
  const moonDetails = getMoonSectionData(req.body.date);
  res.send({ message: moonDetails });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
