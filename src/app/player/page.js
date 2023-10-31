import Layout from '@/components/layout';
import PlayerForm from './player-form';

export default function Player() {
	return <Layout>
		<h1>As player who guesses the magic number</h1>

		<PlayerForm />
	</Layout>
}