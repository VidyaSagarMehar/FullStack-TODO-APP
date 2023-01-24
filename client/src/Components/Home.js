import React from 'react';
import Form from './Form';

const Home = () => {
	return (
		<div>
			<div className="hero" data-theme="dark">
				<Form />
			</div>

			<main className="container" data-theme="dark">
				<div className="grid row">
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
