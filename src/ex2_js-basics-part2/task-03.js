"use strict"
function breakIntoEvenOdd(elements) {
	let result = [0, 0, 0];
	for (let i=0; i<elements.length; i++) {
		if (typeof(elements[i]) === "number" && Number.isNaN(elements[i]) === false) {
			if (elements[i] === 0) {
				result[2] += 1;
			}	else if (elements[i] % 2 === 0) {
				result[0] += 1;
			} else {
				result[1] += 1;
			}
		}
	}
	return result;
}

module.exports = breakIntoEvenOdd