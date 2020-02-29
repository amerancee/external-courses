"use strict"
function checkType(value) {
	let type = typeof(value);
	switch (type) {
		case "string":
		  return "string";
      break;
		case "number":
      return isNaN(value) ? undefined : "number";
      break;
		default:
		  return undefined
	}
}

module.exports = checkType