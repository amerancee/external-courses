"use strict"
function slice(array, begin = 0, end = array.length) {
	let result = [];
	let index = 0;
	let customEnd = array.length;
	if (begin < 0) {
		index = begin + array.length;
	} else {
		index = begin;
	}
	if (end < 0) {
		customEnd = end + array.length;
	} else {
		customEnd = end;
	}
	for (index; index<customEnd && index<array.length; index++) {
		result.push(array[index]);
	}
	return result;
}

module.exports = slice