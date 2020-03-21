"use strict"
function reduce(array, callback, initialValue) {
	let currentValue = initialValue;
	let i = 0;
	if (!(currentValue) || currentValue === 0) { 
		i = 1;
		currentValue = array[0];
	}
	for (i; i<array.length; i++) {
		currentValue = callback(currentValue, array[i], i, array);
	}
	return currentValue;
}

module.exports = reduce