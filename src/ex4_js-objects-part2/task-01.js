"use strict"
function getKeyValueFromProto(key, object) {
	return Object.getPrototypeOf(object)[key];
}

module.exports = getKeyValueFromProto