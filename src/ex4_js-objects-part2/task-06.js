"use strict"
function toUpperCaseEachFirstSymbol(string) {
  let words = string.split(' ');
  for (let i=0; i<words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

module.exports = toUpperCaseEachFirstSymbol