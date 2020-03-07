"use strict"
function breakIntoEvenOdd (elements) {
	let result = [0, 0, 0];
	let numbers = getNumbers(elements);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
				result[2] += 1;
			} else if (numbers[i] % 2 === 0) {
				result[0] += 1;
			} else {
				result[1] += 1;
			}
  }
	return result;
}

function getNumbers (elements) {
	let result = [];
  for (let i = 0; i < elements.length; i++) {
    if (getType(elements[i]) === "number") {
			result.push(elements[i]);
		}
  }
	return result;
}

function getType(unknownElement) {
	let type = typeof(unknownElement);
	switch (type) {
		case "string":
		  return "string";
      break;
		case "number":
      if ( isNaN(unknownElement) ) { 
        return undefined;
        break;
      }
      return "number";
      break;
		default:
		  return undefined;
	}
}

module.exports = breakIntoEvenOdd