import Layout from '@/components/layout';
import TodoList from './todo-list';

export default function TodoPage() {
	return <Layout>
		<h1>An example todo list</h1>

		<TodoList />
	</Layout>
}