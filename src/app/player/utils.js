export function validateNumber({ magicNumber, currentNumber, resultType = 'string' }) {
	const isValid = magicNumber === currentNumber;
	if (resultType === 'boolean') return isValid;

	if (isValid) {
		return `Congratulations !!! You have found the magic number ${currentNumber}.`;
	} else if (magicNumber < currentNumber) {
		return `The magic number is less than ${currentNumber}.` 
	}
	return `The magic number is greater than ${currentNumber}.`
}

export function getMagicNumber(defaultValue = 1) {
	return Math.floor(Math.random() * 10) || defaultValue; 
}