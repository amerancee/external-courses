"use strict"
function breakIntoEvenOdd (arr) {
	let result = [0, 0, 0];
	let numbers = getNumbers(arr);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
				result[2] +=1;
			} else if (numbers[i] % 2 === 0) {
				result[0] += 1;
			} else {
				result[1] +=1;
			}
  }
	return result;
}

function getNumbers (arr) {
	let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ( checkType(arr[i]) === "number" ) {
			result.push(arr[i]);
		}
  }
	return result;
}

function checkType(value) {
	let type = typeof(value);
	switch (type) {
		case "string":
		  return "string";
      break;
		case "number":
      return isNaN(value) ? "undefined" : "number";
      break;
		default:
		  return "undefined"
	}
}

module.exports = breakIntoEvenOdd