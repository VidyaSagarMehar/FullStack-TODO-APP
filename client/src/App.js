import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoteState from './Context/NoteState';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
	return (
		<>
			<NoteState>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
					</Switch>
				</Router>
			</NoteState>
		</>
	);
}

export default App;
