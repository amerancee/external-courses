"use strict"
function changeMaxStringLength(string, length) {
  if (string.length <= length) {
    return string;
  }
  return string.slice(0, length - 1) + '\u2026';
}

module.exports = changeMaxStringLength