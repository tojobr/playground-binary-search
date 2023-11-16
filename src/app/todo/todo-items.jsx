'use client';

import PropTypes from 'prop-types';

import { TASK_STATUS } from '../constants';
import TodoItem from './todo-item';


const TodoItems = ({title, status = '', items = [], onSelectItem}) => {
	const handleClickItem = (item) => {
		onSelectItem && onSelectItem(item, status);
	}

	return (
		<div className='todo-list-container flex1'>
			<div className='todo-list-title'>{title}</div>
			<div className='todo-list-items'>
				{items?.map((item, index) => 
					<TodoItem key={index} label={item} onClick={() => handleClickItem(item)} status={status} />
				)}
			</div>
		</div>
	)
}


TodoItems.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	onSelectItem: PropTypes.func,
	status: PropTypes.oneOf(TASK_STATUS)
}
export default TodoItems;