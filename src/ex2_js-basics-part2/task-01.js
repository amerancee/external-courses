"use strict"
function getType(unknownElement) {
	let type = typeof(unknownElement);
	switch (type) {
		case "string":
		  return "string";
      break;
		case "number":
      if ( isNaN(unknownElement) ) { 
        return undefined;
        break;
      }
      return "number";
      break;
		default:
		  return undefined;
	}
}

module.exports = getType