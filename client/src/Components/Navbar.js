import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="container-fluid" data-theme="dark">
			<ul>
				<li>
					<Link href="/" className="contrast">
						<strong>KeepNotes</strong>
					</Link>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to="login" role="button" className="contrast outline">
						Login
					</Link>
				</li>
				<li>
					<Link to="signup" role="button" className="contrast outline">
						Signup
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
