"use strict"
function getType(el) {
	let type = typeof(el);
	if (type === "string") {
		return "string";
	}
	if (type === "number" && Number.isNaN(el) === false) {
		return "number";
	}
	return undefined;
}

module.exports = getType