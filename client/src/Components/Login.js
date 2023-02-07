import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Login = () => {
	const [credential, setCredential] = useState({ email: '', password: '' });
	// useHistoruy hook to redirect
	let history = useHistory();

	const handleLogin = async (e) => {
		e.preventDefault();

		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: credential.email,
				password: credential.password,
			}),
		});
		const json = await response.json();
		if (json.success) {
			// Save the auth token and redirect
			const authToken = json.user.token;
			localStorage.setItem('token', authToken);
			history.push('/');
		} else {
			alert('invalid Credentials');
		}
		window.location.reload(true);
	};

	const onChange = (e) => {
		setCredential({ ...credential, [e.target.name]: e.target.value });
	};

	return (
		<section className="h-100 d-flex my-5 align-items-center justify-content-center text-center text-light">
			<div className="row g-16 ">
				<div className="col-12 col-md-6">
					<div className="">
						<h2 className="fs-4 mb-3">Join Keep Notes for free</h2>
					</div>
					<div className="container">
						<form className="loginForm  mw-md-xl p-4" onSubmit={handleLogin}>
							<div className="row mb-6 g-4">
								<div className="col-12">
									<div className="form-group">
										<input
											onChange={onChange}
											value={credential.email}
											className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
											id="signUpInput1-3"
											style={{ borderRadius: '3px' }}
											type="email"
											placeholder="Email address"
											name="email"
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<input
											onChange={onChange}
											value={credential.password}
											className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
											id="signUpInput1-4"
											style={{ borderRadius: '3px' }}
											type="password"
											placeholder="Password"
											name="password"
										/>
									</div>
								</div>
							</div>
							<button
								className="btn btn-primary px-5 py-2 my-3 text-uppercase"
								type="submit"
							>
								Log in
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
