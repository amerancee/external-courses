"use strict"
function getMaxValue(values) {
	let result = values[0];
  for (let i = 0; i < values.length; i++) {
    if (result < values[i]) {
      result = values[i];
		}
  }
	return result;
}

module.exports = getMaxValue