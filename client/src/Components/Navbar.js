import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import { FaUserCircle } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar() {
	// Offcanvas for user profile
	function UserProfile() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return (
			<>
				<FaUserCircle
					role="button"
					size="2rem"
					className="mx-2 "
					color="white"
					onClick={handleShow}
				/>

				<Offcanvas
					show={show}
					onHide={handleClose}
					placement="end"
					className="offCanvas text-white"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Offcanvas</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</Offcanvas.Body>
				</Offcanvas>
			</>
		);
	}

	let history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem('token');
		history.push('/login');

		// reload the navbar to show logout
		window.location.reload(true);
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-dark ">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					KeepNotes
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
					</ul>
					{/* Show logout if user is logged in or show login and signup button */}
					{!localStorage.getItem('token') ? (
						<form className="d-flex" role="search">
							<Link
								className="btn btn-outline-primary mx-2"
								to="/login"
								role="button"
							>
								Login
							</Link>
							<Link
								className="btn btn-outline-primary mx-2"
								to="/signup"
								role="button"
							>
								Signup
							</Link>
						</form>
					) : (
						<button
							onClick={handleLogout}
							className="btn btn-outline-primary mx-2"
							role="button"
						>
							Logout
						</button>
					)}

					<UserProfile />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
