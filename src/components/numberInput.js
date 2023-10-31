import { forwardRef } from 'react';

const NumberInput = (props, ref) => {

	return (
		<>
			<input type='number' name='number' ref={ref} />
		</>
	);
}

export default forwardRef(NumberInput)