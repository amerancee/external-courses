"use strict"
function showElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
  }
  console.log(elements.length);
  return undefined;
}

module.exports = showElements