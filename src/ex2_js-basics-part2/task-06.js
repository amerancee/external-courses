"use strict"
function isPrimeNumber (number) {
	if ( isCorrectValue(number) === false ) {
		return 'Данные неверны';
	}
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return `Число ${number} - составное число`;
		}
	}
	return `Число ${number} - простое число`;
}

function isCorrectValue (number) {
	if (number > 1000 || number < 0 || number === 0 || number === 1) {
		return false;
	} 
	return true;
}

module.exports = isPrimeNumber