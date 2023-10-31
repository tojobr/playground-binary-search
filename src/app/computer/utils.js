export function getMidNumber(start, end) {
	return Math.floor((start + end) / 2);
}

export function searchRecursive({ start, end, value }) {
	const currentNumber = getMidNumber(start, end);
	if (currentNumber < value) {
		return searchRecursive({ start: currentNumber, end, value });
	}	else if (currentNumber > value) {
		return searchRecursive({ start, end: currentNumber, value });
	} else {
		return value;
	}
}

export function validateNumber(number) {
	const magicNumber = getMidNumber({ start: 1, end: 10, value: number });
	return `Is ${magicNumber} the magic number ? `;
}

export function autoResolveMagicNumber(playerNumber) {
	const magicNumber = searchRecursive({ start: 1, end: 10, value: playerNumber });
	return `Is ${magicNumber} the magic number ? `;
}