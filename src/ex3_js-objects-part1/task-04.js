"use strict"
function addNewKey(newKey, object) {
	if (newKey in object) {
		return object;
	}
	Object.assign(object, {[newKey]: "new"});
	return object;
}

module.exports = addNewKey