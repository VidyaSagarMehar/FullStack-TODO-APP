import AddForm from './AddForm';
import Notes from './Notes';

const Home = () => {
	return (
		<div>
			<div className="hero" data-theme="dark">
				<AddForm />
			</div>

			<main className="container" data-theme="dark">
				<Notes />
			</main>
		</div>
	);
};

export default Home;
