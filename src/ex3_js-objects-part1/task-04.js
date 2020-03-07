"use strict"
function addNewKey(newKey, object) {
	if (newKey in object) {
		return object;
	}
	object[newKey] = 'new'; //eslint-disable-line no-param-reassign
	return object;
}

module.exports = addNewKey