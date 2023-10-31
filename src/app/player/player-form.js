'use client';

import { useEffect, useRef, useState } from 'react';
import NumberInput from '@/components/numberInput';
import { getMagicNumber, validateNumber } from './utils';

export default function PlayerForm({}) {
	const [magicNumber, setMagicNumber] = useState(0);
	const [isValid, setIsValid] = useState(false);

	const containerRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		const number = getMagicNumber();
		console.log({ number });
		setMagicNumber(number);
	}, []);
	
	function handleSubmit(e) {
		e.preventDefault();
		const currentNumber = parseInt(inputRef.current.value, 10);
		console.log({ currentNumber });
		addFeedback(currentNumber);
		const isValid = validateNumber({magicNumber, currentNumber, resultType: 'boolean'});
		setIsValid(isValid);
	
		if (!isValid) {
			console.log(`KO magicNumber ${magicNumber} => currentNumber = ${currentNumber}`)
		}
		inputRef.current.value = '';
	};

	function addFeedback(currentNumber) {
		const node = document.createElement('div');
		node.innerText = validateNumber({magicNumber, currentNumber});
		containerRef.current.appendChild(node);
	}

	function handleReset() {
		setIsValid(false);
		setMagicNumber(getMagicNumber());
		containerRef.current.innerHTML = '';
	}

	return (
		<>
			<div>What is the magic number ? </div>
			<div>It is between 1 and 10.</div>
			<div ref={containerRef}></div>
			{ !isValid &&
				<form onSubmit={handleSubmit}>
					<NumberInput ref={inputRef} />
					<button type='submit'>OK</button>
				</form>
			}
			{ isValid &&
				<button onClick={handleReset}>Restart</button>
			}
		</>
		
	);
}