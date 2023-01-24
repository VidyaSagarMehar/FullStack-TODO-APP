import React, { useContext, useEffect } from 'react';
import noteContext from '../Context/noteContext';

const About = () => {
	const a = useContext(noteContext);
	useEffect(() => {
		a.update();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			About This is aboout {a.state.name} and {a.state.class}
		</div>
	);
};

export default About;
