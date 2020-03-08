"use strict"
function getRandomNumberFromRange(min, max) {
  return Math.round((Math.random() * (max - min) ) + min);
}

module.exports = getRandomNumberFromRange