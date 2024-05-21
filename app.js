const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');

// Import config specs:
const configs = require('./config.js');

// Import Horse class for conversions:
const Horse = require('./converter.js');

// Using express json middleware to parse json:
// Documentation: https://expressjs.com/en/api.html#express.json
app.use(express.json());

// ===============================
// CONVERT HANDS TO SELECTED UNIT:
// ===============================
app.post('/hands-converter/convert', (req, res) => {
  // Get hands and unit to convert to from http request:
  const { hands, toUnit } = req.body;
  console.log(`Received data: ${hands}, ${toUnit}`)

  // Create Horse object and perform unit conversion
  let horse = new Horse(hands);
  let conversion = horse.convert(toUnit);

  // Send unit and conversion as json response
  res.json({[toUnit]: conversion});
})

// ===============================
// SET HORSE BREED & UPDATE HANDS:
// ===============================
app.post('/hands-converter/set-breed', (req, res) => {
  // Get breed from http request:
  const { breed } = req.body;
  console.log(`Received data: ${breed}`)

  // Create Horse object and perform change breed
  let horse = new Horse();
  horse.setBreed(breed);

  let newHands = horse.hands;
  let newBreed = horse.breed;

  // Send unit and conversion as json response
  res.json({hands: newHands, breed: newBreed});
})

// ===============================
// SEE CONVERSION HISTORY:
// ===============================
app.post('/hands-converter/see-conversions', (req, res) => {
  // Get breed from http request:
  const { breed } = req.body;
  console.log(`Received data: ${breed}`)

  // Create Horse object and perform change breed
  let horse = new Horse();
  horse.setBreed(breed);

  let newHands = horse.hands;
  let newBreed = horse.breed;

  // Send unit and conversion as json response
  res.json();
})


app.listen(configs.port, () => {
  console.log(`HandsConverter listening on port ${configs.port}`)
})