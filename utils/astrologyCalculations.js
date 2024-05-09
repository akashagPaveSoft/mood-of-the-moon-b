const sweph = require("sweph");
const constants = require("sweph").constants;
const VOC_DATA = require("../constants/voc.js");
const MOOD_DATA = require("../constants/aspect_feeling.js");

const VOC_STRING = "Void";

const VOC_STATUS = {
  BEGINS: "begins",
  ENDS: "ends",
};

const ALL_PLANETS = {
  0: { name: "Sun" },
  1: { name: "Moon" },
  2: { name: "Mercury" },
  3: { name: "Venus" },
  4: { name: "Mars" },
  5: { name: "Jupiter" },
  6: { name: "Saturn" },
  7: { name: "Uranus" },
  8: { name: "Neptune" },
  9: { name: "Pluto" },
};

const ASPECT_TYPES = {
  APPLYING: "applying",
  SEPARATING: "separating",
};

const CELESTIAL_BODIES = {
  SUN: "Sun",
  MOON: "Moon",
};

const SIGNS = [
  {
    name: "Aries",
    element: "Fire",
    startAngle: 0,
    endAngle: 29.999999,
  },
  {
    name: "Taurus",
    element: "Earth",
    startAngle: 30,
    endAngle: 59.999999,
  },
  {
    name: "Gemini",
    element: "Air",
    startAngle: 60,
    endAngle: 89.999999,
  },
  {
    name: "Cancer",
    element: "Water",
    startAngle: 90,
    endAngle: 119.999999,
  },
  {
    name: "Leo",
    element: "Fire",
    startAngle: 120,
    endAngle: 149.999999,
  },
  {
    name: "Virgo",
    element: "Earth",
    startAngle: 150,
    endAngle: 179.999999,
  },
  {
    name: "Libra",
    element: "Air",
    startAngle: 180,
    endAngle: 209.999999,
  },
  {
    name: "Scorpio",
    element: "Water",
    startAngle: 210,
    endAngle: 239.999999,
  },
  {
    name: "Sagittarius",
    element: "Fire",
    startAngle: 240,
    endAngle: 269.999999,
  },
  {
    name: "Capricorn",
    element: "Earth",
    startAngle: 270,
    endAngle: 299.999999,
  },
  {
    name: "Aquarius",
    element: "Air",
    startAngle: 300,
    endAngle: 329.999999,
  },
  {
    name: "Pisces",
    element: "Water",
    startAngle: 330,
    endAngle: 359.999999,
  },
];

const ASPECTS = [
  { name: "Conjunct", angle: 0 },
  { name: "Sextile", angle: 60 },
  { name: "Square", angle: 90 },
  { name: "Trine", angle: 120 },
  { name: "Quincunx", angle: 150 },
  { name: "Opposite", angle: 180 },
];

// While calculating aspects, default orb would be +- 4 degrees of the planets difference
const DEFAULT_ORB_RANGE = 8;

/**
 * Add minutes to a date object
 *  @param {Date} date - The date to add minutes to
 *  @param {number} minutes - The number of minutes to add
 *  @returns {Date} - The new date
 */
const addMinutes = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000);
};

const convertDateTimeToJulian = (date) => {
  console.log("Date inside convertDateTimeToJulian -> ", date);

  if (!(date instanceof Date)) {
    date = new Date(date); // Convert string to Date object
  }

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const hour = date.getUTCHours();
  const minutes = date.getUTCMinutes() / 100;
  const fullTime = hour + minutes;

  const julianDay = sweph.julday(
    year,
    month,
    day,
    fullTime,
    sweph.constants.SE_GREG_CAL
  );

  // console.log("JULIAN DAY INSIDE CONVERT DATE TIME TO JULIAN ---> ", julianDay);

  return julianDay;
};

/**
 * Calculates the position of a planet for a given Julian Day.
 *
 * @param {number} julianDay - The Julian Day for which to calculate the planet position.
 * @param {number} planetCode - The planet code (e.g., sweph.constants.SE_MERCURY) for which
 * to calculate the position.
 * @returns {Array} - An array containing planet name, house name,
 * degrees, minutes, seconds, and longitude.
 */

const calculatePlanetPositionDetails = (julianDay, planetCode) => {
  const flag = sweph.constants.SEFLG_MOSEPH;
  const planetName = ALL_PLANETS[planetCode].name;

  console.log(
    "P L A N E T C O D E --> ",
    planetName,
    "And here is the code -> ",
    planetCode
  );

  const position = sweph.calc_ut(julianDay, planetCode, flag);

  const dt = new Date();
  dt.setSeconds(dt.getSeconds() + 600);
  const julDay2 = convertDateTimeToJulian(dt);
  const convertString = JSON.stringify(julDay2);
  const julDay2Num = parseInt(convertString);
  // console.log("cheking the type of julday2", typeof julDay2Num);
  const position2 = sweph.calc_ut(julDay2Num, planetCode, flag);

  const longitude = position.data[0];
  // console.log("LONGITUDE HERE --> ", longitude);
  const nextLongitude = position2.data[0];

  let house = "";
  let element = "";
  let degrees = 0;
  let minutes = 0;
  let seconds = 0;

  for (let currentSign = 0; currentSign < SIGNS.length; currentSign++) {
    if (
      longitude >= SIGNS[currentSign].startAngle &&
      longitude <= SIGNS[currentSign].endAngle
    ) {
      // Calculate the longitude within the house and convert it to DMS
      const longitudeWithHouse = longitude - SIGNS[currentSign].startAngle;
      const DMS = toDegreesMinutesAndSeconds(longitudeWithHouse);

      degrees = DMS.degrees;
      minutes = DMS.minutes;
      seconds = DMS.seconds;

      // Update the house variable
      house = SIGNS[currentSign].name;
      element = SIGNS[currentSign].element;
    }
  }
  return {
    name: planetName,
    element,
    house,
    degrees,
    minutes,
    seconds,
    longitude,
    nextLongitude,
  };
};

function toDegreesMinutesAndSeconds(coordinate) {
  const absolute = Math.abs(coordinate);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return { degrees, minutes, seconds };
}

const getDetailsOfAllPlanets = (julianDay) => {
  const allPlanetsDetails = [];

  const sunDetails = calculatePlanetPositionDetails(
    julianDay,
    sweph.constants.SE_SUN
  );

  const moonDetails = calculatePlanetPositionDetails(
    julianDay,
    sweph.constants.SE_MOON
  );

  allPlanetsDetails.push(sunDetails);
  allPlanetsDetails.push(moonDetails);

  // Calculate position details for all planets
  for (
    let curPlanet = sweph.constants.SE_MERCURY;
    curPlanet <= sweph.constants.SE_PLUTO;
    curPlanet++
  ) {
    // eslint-disable-next-line no-await-in-loop
    const planetDetails = calculatePlanetPositionDetails(julianDay, curPlanet);
    allPlanetsDetails.push(planetDetails);
  }

  return allPlanetsDetails;
};

const calculateAspects = (allPlanetsDetails) => {
  const sunDetails = allPlanetsDetails[0];
  const moonDetails = allPlanetsDetails[1];

  const moonLongitude = moonDetails.longitude;
  const sunLongitude = sunDetails.longitude;

  const nextMoonLongitude = moonDetails.nextLongitude;
  const nextSunLongitude = sunDetails.nextLongitude;

  let moonAspects = [];
  const sunAspects = [];

  for (
    let curPlanet = sweph.constants.SE_SUN;
    curPlanet <= sweph.constants.SE_PLUTO;
    curPlanet++
  ) {
    const currentPlanet = allPlanetsDetails[curPlanet];
    const planetLongitude = currentPlanet.longitude;
    const nextPlanetLongitude = currentPlanet.nextLongitude;

    const moonAnglePlanet = moonLongitude - planetLongitude;
    const nextMoonAnglePlanet = nextMoonLongitude - nextPlanetLongitude;

    let moonAnglePlanetAbs = Math.abs(moonAnglePlanet);
    let nextMoonAnglePlanetAbs = Math.abs(nextMoonAnglePlanet);

    // If angle b/w moon and a planet is more than 180 deg,
    // we should take the smaller angle
    if (moonAnglePlanetAbs > 180) {
      moonAnglePlanetAbs = 360 - moonAnglePlanetAbs;
      nextMoonAnglePlanetAbs = 360 - nextMoonAnglePlanet;
    }

    const sunAnglePlanet = sunLongitude - planetLongitude;
    const nextSunAnglePlanet = nextSunLongitude - nextPlanetLongitude;

    let sunAnglePlanetAbs = Math.abs(sunAnglePlanet);
    const nextSunAnglePlanetAbs = Math.abs(nextSunAnglePlanet);

    // If angle b/w sun and a planet is more than 180 deg,
    // we should take the smaller angle
    if (sunAnglePlanetAbs > 180) {
      sunAnglePlanetAbs = 360 - sunAnglePlanetAbs;
      nextMoonAnglePlanetAbs = 360 - nextMoonAnglePlanet;
    }

    for (let curAspect = 0; curAspect < ASPECTS.length; curAspect++) {
      const aspectRangeMin = ASPECTS[curAspect].angle - DEFAULT_ORB_RANGE;
      const aspectRangeMax = ASPECTS[curAspect].angle + DEFAULT_ORB_RANGE;

      if (curPlanet !== sweph.constants.SE_MOON) {
        if (
          moonAnglePlanetAbs >= aspectRangeMin &&
          moonAnglePlanetAbs <= aspectRangeMax
        ) {
          const orb = Math.abs(moonAnglePlanetAbs - ASPECTS[curAspect].angle);

          // If Position Difference between the next position and current position is less than 0,
          // it means that the planet is approaching the other planet, so its an applying aspect
          const positionDiff = nextMoonAnglePlanetAbs - moonAnglePlanetAbs;
          const aspectType =
            positionDiff < 0 ? ASPECT_TYPES.APPLYING : ASPECT_TYPES.SEPARATING;

          moonAspects.push({
            celestialBody: CELESTIAL_BODIES.MOON,
            planet: currentPlanet.name,
            aspect: ASPECTS[curAspect].name,
            orb: orb.toFixed(6),
            aspectType,
          });
        }
      }

      if (curPlanet !== sweph.constants.SE_SUN) {
        if (
          sunAnglePlanetAbs >= aspectRangeMin &&
          sunAnglePlanetAbs <= aspectRangeMax
        ) {
          const orb = Math.abs(sunAnglePlanetAbs - ASPECTS[curAspect].angle);

          // If Position Difference between the next position and current position is less than 0,
          // it means that the planet is approaching the other planet, so its an applying aspect
          const positionDiff = nextSunAnglePlanetAbs - sunAnglePlanetAbs;
          const aspectType =
            positionDiff < 0 ? ASPECT_TYPES.APPLYING : ASPECT_TYPES.SEPARATING;

          sunAspects.push({
            celestialBody: CELESTIAL_BODIES.SUN,
            planet: currentPlanet.name,
            aspect: ASPECTS[curAspect].name,
            orb,
            aspectType,
          });
        }
      }
    }
  }

  // Check if the moon is in void of course
  // If it is, remove all aspects from the moon
  const curVOCDetails = getCurrentVOCDetails();
  if (
    new Date() > new Date(curVOCDetails[0]) &&
    new Date() < new Date(curVOCDetails[1])
  ) {
    moonAspects = [];
  }

  // console.log("Moon Aspects inside Calculate Aspects -> ", moonAspects);

  return { moonAspects, sunAspects };
};

const ephemerisCalculations = (date) => {
  console.log("INside ephmenris Cals ->", date);
  const dateNow = date;

  const julianDayNow = convertDateTimeToJulian(dateNow);

  const allPlanetsDetails = getDetailsOfAllPlanets(julianDayNow);

  const { moonAspects, sunAspects } = calculateAspects(allPlanetsDetails);

  // console.log("ALL PLANET DETAILS -> ", allPlanetDetails);
  const sunDetails = allPlanetsDetails[0];
  const moonDetails = allPlanetsDetails[1];

  console.log("SUN DETAILS -> ", sunDetails);

  return [sunDetails, moonDetails, sunAspects, moonAspects];
};

const calculateNextFeeling = () => {
  let currentPlanet = "";
  let newPlanet = "";
  let newDate = new Date();

  const [moonPositionDetails, moonAspects] = ephemerisCalculations();

  // console.log("Moon Aspects inside CALCULATE NEXT FEELING ->", moonAspects);

  const mostIntenseMoonAspect = getMostIntenseAspect(moonAspects);

  currentPlanet = mostIntenseMoonAspect.planet;

  for (let i = 1; i < 720; i++) {
    const updatedDate = addMinutes(new Date(), i * 2);

    const [moonAspects] = ephemerisCalculations(updatedDate);

    const tempMostIntenseMoonAspect = getMostIntenseAspect(moonAspects);

    console.log("tempMostIntenseAspect ---> ", tempMostIntenseMoonAspect);

    if (Object.keys(tempMostIntenseMoonAspect).length === 0) {
      const [startDate, endDate] = getCurrentVOCDetails();
      newDate = new Date(endDate);
      break;
    }

    newPlanet = tempMostIntenseMoonAspect.planet;

    if (newPlanet !== currentPlanet) {
      newDate = updatedDate;
      break;
    }
  }

  return newDate;
};

const getMostIntenseAspect = (aspectsArray) => {
  // console.log(
  //   "ASPECTS ARRAY Inside GET MOST INTENSE ASPECT ---> ",
  //   aspectsArray
  // );
  let mostIntenseAspect = aspectsArray[0] || {};

  for (let i = 0; i < aspectsArray.length; i++) {
    if (aspectsArray[i].orb < mostIntenseAspect.orb) {
      mostIntenseAspect = aspectsArray[i];
    }
  }

  return mostIntenseAspect;
};

/**
 * Gets the current Void Of Course (in GMT)
 * @returns An array of 2 strings:
 * [0] The beginning of Void Of Course (in GMT)
 * [1] The end of Void Of Course (in GMT)
 */
const getCurrentVOCDetails = () => {
  const dateNow = new Date();
  const year = dateNow.getUTCFullYear();
  const vocYearData = VOC_DATA[year];

  for (let i = 0; i < vocYearData.length; i++) {
    const vocDateStr = Object.keys(vocYearData[i])[0];

    const vocDate = new Date(vocDateStr);

    // If the vocDate is greater than the current date,
    // then check for which date the VOC begins, and return
    // previous 2 entries (which are previous begins and previous ends)
    if (vocDate > dateNow) {
      if (vocYearData[i][vocDateStr] === VOC_STATUS.BEGINS) {
        const vocDateBeginsStr = Object.keys(vocYearData[i - 2])[0];
        const vocDateEndsStr = Object.keys(vocYearData[i - 1])[0];

        return [vocDateBeginsStr, vocDateEndsStr];
      }
    }
  }
};

const getMoonSectionData = (date) => {
  console.log("Date inside getMoonSectionData -> ", date);
  const finalMoonSectionObject = {};

  const [sunPositionDetails, moonPositionDetails, sunAspects, moonAspects] =
    ephemerisCalculations(date);

  const nextFeelingDate = calculateNextFeeling();

  const mostIntenseMoonAspect = getMostIntenseAspect(moonAspects);

  const moonHouse = moonPositionDetails.house;
  const sunHouse = sunPositionDetails.house;
  const moonAspect = mostIntenseMoonAspect?.aspect || VOC_STRING;
  const aspectingPlanet = mostIntenseMoonAspect?.planet || "";

  let moodObject = {};

  for (let i = 0; i < MOOD_DATA.length; i++) {
    if (MOOD_DATA[i].sunHouse === sunHouse) {
      // If moon is in void of course
      if (moonAspect === VOC_STRING) {
        if (MOOD_DATA[i].moonHouse === moonHouse) {
          moodObject = MOOD_DATA[i];
        }

        // If moon has an aspect
      } else if (MOOD_DATA[i].aspectingPlanet === aspectingPlanet) {
        if (MOOD_DATA[i].moonAspect === moonAspect) {
          moodObject = MOOD_DATA[i];
        }
      }
    }
  }

  finalMoonSectionObject.moonHouse = moonHouse;
  finalMoonSectionObject.planet = aspectingPlanet;
  finalMoonSectionObject.moonAspect = moonAspect;
  finalMoonSectionObject.orb = mostIntenseMoonAspect?.orb || 0;
  finalMoonSectionObject.feeling = moodObject.feeling;
  finalMoonSectionObject.description = moodObject.description;
  //   finalMoonSectionObject.nextVOCDetails = getNextVOCDetails();
  //   finalMoonSectionObject.nextMoonPhaseDetails = getNextMoonPhaseDetails();
  finalMoonSectionObject.moonPositionDegrees = moonPositionDetails.degrees;
  finalMoonSectionObject.moonPositionMinutes = moonPositionDetails.minutes;
  finalMoonSectionObject.nextFeelingDate = nextFeelingDate;

  console.log("FinalMoonSectionObject-----> ", finalMoonSectionObject);
  return finalMoonSectionObject;
};

export {
  calculatePlanetPositionDetails,
  getDetailsOfAllPlanets,
  ephemerisCalculations,
  getMoonSectionData,
  calculateNextFeeling,
  convertDateTimeToJulian,
};
