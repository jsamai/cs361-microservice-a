const fs = require("fs");

// A horse hand unit = 4 inches = 0.3333333 feet = 0.1014984 meters
// SOURCE: https://www.britannica.com/science/hand-measurement
const HANDS_METERS = 0.1014984
const HANDS_FEET = 0.3333333

// Error handling for invalid inputs:
class InvalidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidInputError";
    }
}

function checkBreed(inputBreed) {
  // Use fs module to read from json
  // SOURCE: https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js#method-2-using-the-fs-module
  try {
    const data = fs.readFileSync("breeds.json");
    const horses = JSON.parse(data);

    const breeds = horses.breeds;

    for (let i = 0; i < breeds.length; i++) {
      if (breeds[i].breed === inputBreed) {
        return breeds[i];
      }
    }
    // Return null if breed not found
    return null;
  } catch (err) {
    throw err;
  }
}

/**
 * Horse class for horse height calculations.
 *
 * @param {number} hands - Height of horse in hands.
 * @param {string} breed - Horse breed (optional).
 *
 * @method convert 
 */
class Horse {
  constructor(hands, breed=null) {
    this.hands = hands;
    this.breed = breed;
    this.conversions = [];
  }

/**
 * Convert horse hands to feet or meters.
 *
 * @param {string} toUnit - Unit to covert to ('feet' or 'meters')
 */
  convert(toUnit) {
  // Throw error if negative hands value is given:
  if (this.hands < 0 || isNaN(this.hands)) {
    throw new InvalidInputError("hands parameter must be > 0")
  }

  // Convert hands to specified unit:
  switch(toUnit) {
    case ('feet'):
      let feet = (this.hands * HANDS_FEET).toFixed(2)
      this.conversions.push({feet: feet})
      return feet;

    case ('meters'):
      let meters = (this.hands * HANDS_METERS).toFixed(2)
      this.conversions.push({meters: meters})
      return meters;

    // Throw error if input unit is not valid:
    default:
      throw new InvalidInputError("toUnit parameter must be 'feet' or 'meters'")
    }
  }

  /**
   * Get a list of previous unit conversions
   *
   * @param {number} index - Index value of conversion array (optional)
   * 
   * If index is specified, returns the conversion corresponding
   * to the index value.
   * 
   * If no index is specified, returns an array containing all conversions.
   * 
   */
  getConversion(index) {
    if (index >= 0 && index < this.conversions.length) {
      return this.conversions[index];
    }

    return this.conversions;
  }

  /**
   * Sets the hands attribute equal to the average for the specified
   * horse breed. If the horse breed cannot be found, the hands
   * value will not be changed.
   *
   * If a breed is not specified as a parameter, the current
   * breed attribute will be used.
   *
   * @param {string} inputBreed - Horse breed (optional)
   */
  setBreed(inputBreed) {
    const storedBreed = checkBreed(inputBreed);

    if (storedBreed) {
      this.breed = inputBreed;
      this.hands = storedBreed.hands;
    }
  }
}

module.exports = Horse;
