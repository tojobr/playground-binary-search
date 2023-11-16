'use client';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TASK_STATUS } from '../constants';
import './todo-item.scss';

const TodoItem = ({label, onClick, status = 'todo'}) => {
	return (
		<div
			className={
				classNames(
					'item',
					`item-${status}`
				)
			}
			onClick={onClick}
		>
			{label}
		</div>
	)
}

TodoItem.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	status: PropTypes.oneOf(TASK_STATUS)
}
export default TodoItem;