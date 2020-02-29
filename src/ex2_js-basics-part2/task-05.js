"use strict"
function getMaxValue (arr) {
	let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if ( result < arr[i] ) {
      result = arr[i];
		}
  }
	return result;
}

module.exports = getMaxValue