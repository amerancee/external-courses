"use strict"
function createNonProtoObject() {
	return Object.create(null);
}

module.exports = createNonProtoObject