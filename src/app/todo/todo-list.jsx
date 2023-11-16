'use client';

import './todo-list.scss';
import TodoItems from './todo-items';
import { useCallback, useState } from 'react';

const defaultTasks = ['task1', 'task2', 'task3'];

const TodoList = () => {
	console.log('render : ' + new Date().toISOString());
	const [todoTasks, setTodoTasks] = useState(defaultTasks);
	const [doingTasks, setDoingTasks] = useState([]);
	const [doneTasks, setDoneTasks] = useState([]);

	const [tasks, setTasks] = useState(defaultTasks.map(task => ({name: task, status: 'todo'})));
	
	const moveTo = ({task, src, setSrc, dest, setDest}) => {
		const srcIndex = src.indexOf(task);
		setDest([...dest, src.splice(srcIndex, 1)]);
		setSrc(src);
	}

	const updateTask = (task, source) => {
		let src, dest, setSrc, setDest;
		switch(source) {
			case 'todo':
				src = todoTasks;
				dest = doingTasks;
				setSrc = setTodoTasks;
				setDest = setDoingTasks;
				moveTo({task, src: todoTasks, setSrc: setTodoTasks, dest: doingTasks, setDest: setDoingTasks});
				break;
			case 'doing':
				moveTo({task, src: doingTasks, setSrc: setDoingTasks, dest: doneTasks, setDest: setDoneTasks});
				break;
			case 'done':
				// currentTask.status = 'assigned';
				break;
			default:
				break;
			}
		console.log({task, source, tasks});
		// setTasks(tasks);
	};

	function filterItems(source) {
		const res = tasks?.filter(item => item.status === source).map(item => item.name);
		console.log({source, res, tasks});
		return res;
	}

	return (
		<div className='todo-list'>
			<TodoItems
				status='todo'
				title='Todo'
				items={todoTasks}
				onSelectItem={updateTask}
			/>
			<TodoItems
				status='doing'
				title='Doing'
				items={doingTasks}
				onSelectItem={updateTask}
			/>
			<TodoItems
				status='done'
				title='Done'
				items={doneTasks}
				onSelectItem={updateTask}
			/>
		</div>
	)
}
export default TodoList;