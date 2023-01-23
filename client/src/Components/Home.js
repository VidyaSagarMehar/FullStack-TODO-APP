import React from 'react';
import Form from './Form';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div>
			<div className="hero" data-theme="dark">
				<Navbar />
				<Form />
			</div>

			<main className="container" data-theme="dark">
				<div class="grid row">
					<span>
						<p>I'm a card!</p>
					</span>
					<span>
						<p>I'm a card!</p>
					</span>
					<span>
						<p>I'm a card!</p>
					</span>
					<span>
						<p>I'm a card!</p>
					</span>
				</div>
			</main>
		</div>
	);
};

export default Home;
