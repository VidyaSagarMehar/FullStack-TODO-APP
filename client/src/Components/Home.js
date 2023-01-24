import Form from './Form';
import Notes from './Notes';

const Home = () => {
	return (
		<div>
			<div className="hero" data-theme="dark">
				<Form />
			</div>

			<main className="container" data-theme="dark">
				<Notes />
			</main>
		</div>
	);
};

export default Home;
