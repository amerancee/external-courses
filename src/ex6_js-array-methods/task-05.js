"use strict"
function map(array, callback) {
	let result = [];
	for (let i=0; i<array.length; i++) {
			result.push(callback(array[i], i, array));
	}
	return result;
}

module.exports = map