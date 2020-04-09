"use strict"
function isSameElements(elements) {
	let result = true;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== elements[0]) {
				result = false;
    }
  }
	return result;
}

module.exports = isSameElements