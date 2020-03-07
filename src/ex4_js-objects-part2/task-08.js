"use strict"
function toCamelCase(string) {
  let words = string.toLowerCase().split(' ');
  for (let i=1; i<words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}

module.exports = toCamelCase