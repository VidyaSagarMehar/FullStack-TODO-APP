import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home';
import About from './Components/About';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
