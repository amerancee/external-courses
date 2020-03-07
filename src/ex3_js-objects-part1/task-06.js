"use strict"
function getObjectDeepClone(object) {
	const ObjectDeepClone = {};
	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			if (Array.isArray(object)) {
				let arrayClone = [];
				for (let index of object) {
					if (typeof(index) === "object") {
						arrayClone.push(getObjectDeepClone(index));
					} else {
						arrayClone.push(index);
					}
				}
				return arrayClone;
			}
			if (typeof object[key] === "object") {
				ObjectDeepClone[key] = getObjectDeepClone(object[key]);
			} else {
				ObjectDeepClone[key] = object[key];
			}
		}
	}
	return ObjectDeepClone;  
}

module.exports = getObjectDeepClone