"use strict"
function toUpperCaseFirstSymbol(string) {
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = toUpperCaseFirstSymbol