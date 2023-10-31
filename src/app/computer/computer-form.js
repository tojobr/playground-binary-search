'use client';

import { useState, useRef, useEffect } from 'react';
import NumberInput from '@/components/numberInput';

import { getMidNumber, resolveMagicNumber } from './utils';

const ComputerForm = () => {
	const [isValid, setIsValid] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [playerNumber, setPlayerNumber] = useState(0);
	const [computerNumber, setComputerNumber] = useState(0);
	const [startNumber, setStartNumber] = useState(0);
	const [endNumber, setEndNumber] = useState(0);

	const containerRef = useRef(null);
	const inputRef = useRef(null);
	
	useEffect(() => {
		const number = getMidNumber(startNumber, endNumber);
		setComputerNumber(number);
		if (number) {
			verifyNumber(number);
		}
	}, [startNumber, endNumber]);

	useEffect(() => {
		if (playerNumber && computerNumber === playerNumber) {
			handleFinish();
		}
	}, [computerNumber, playerNumber]);

	function handleSubmit(e) {
		e.preventDefault();
		const number = parseInt(inputRef.current.value, 10);
		setPlayerNumber(number);
		const text = `My magic number is ${number}`;
		addFeedback(text);
		
		setStartNumber(1);
		setEndNumber(10);
		setIsPlaying(true);
	};

	function verifyNumber(number) {
		const text = `Is ${number} the magic number ? `;
		addFeedback(text, 'Computer');
	}

	function addFeedback(text, prefix = 'Player') {
		const node = document.createElement('div');
		node.innerText = `${prefix} : ${text}`;
		containerRef.current.appendChild(node);
	}

	function handleReset() {
		setIsValid(false);
		setStartNumber(0);
		setEndNumber(0);
		setIsPlaying(true);
		containerRef.current.innerHTML = '';
	}

	function handlePlus() {
		const text = `The magic number is more than ${computerNumber}`;
		addFeedback(text);
		setStartNumber(computerNumber);
	}

	function handleMinus() {
		const text = `The magic number is less than ${computerNumber}`;
		addFeedback(text);
		setEndNumber(computerNumber);
	}

	function handleFinish() {
		const text = `Yes!!! The magic number is ${computerNumber}`;
		addFeedback(text);
		setIsValid(true);
	}

	const buttons = isPlaying ? <>
		<button type='button' onClick={handlePlus}>&nbsp;&nbsp; + &nbsp;&nbsp;</button>
		<button type='button' onClick={handleMinus}>&nbsp;&nbsp; - &nbsp;&nbsp; </button>
	</> : null;

	return (
		<>
			<div>Enter a number between 1 and 10.</div>
			<div>Computer will guess the magic number.</div>

			<div ref={containerRef}></div>
			{ !isValid &&
				<form onSubmit={handleSubmit}>
					<NumberInput ref={inputRef} />
					<button type='submit' disabled={isPlaying}>Play</button>
					{buttons}
				</form>
			}
			{ isValid &&
				<button onClick={handleReset}>Restart</button>
			}
		</>
	)
}
export default ComputerForm;