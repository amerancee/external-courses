"use strict"
function isSameElemens(arr) {
	let result = true;
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] !== arr[0] ) {
				result = false;
    }
  }
	return result;
}

module.exports = isSameElemens