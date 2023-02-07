import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import '../App.css';

const Signup = () => {
	// setting the progress initial to Zero
	const [progress, setProgress] = useState(0);
	const [credential, setCredential] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	});

	let history = useHistory();
	const handleSignup = async (e) => {
		// setting the progress bar
		setProgress(progress + 100);
		e.preventDefault();

		// get info using destructuring
		const { firstname, lastname, email, password } = credential;

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ firstname, lastname, email, password }),
		});
		const json = await response.json();
		// console.log(json);
		if (json.success) {
			// Save the auth token and redirect
			const authToken = json.user.token;
			localStorage.setItem('token', authToken);
			history.push('/');
		} else {
			console.log('Invalid inputs');
		}
		// reload the navbar to show logout
		window.location.reload(true);
	};

	const onChange = (e) => {
		setCredential({ ...credential, [e.target.name]: e.target.value });
	};
	return (
		<section className="h-100 d-flex my-5 align-items-center justify-content-center text-center text-light">
			{/* Progress Bar */}
			<LoadingBar
				color="#0B5ED7"
				height={4}
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<div className="">
				<div className="row g-16">
					<div className="col-12 col-md-6">
						<div className="mw-md-lg">
							<h2 className="fs-4 mb-3">Join Keep Notes for free</h2>
						</div>
						<div className="container">
							<form className="mw-md-xl signupForm p-4" onSubmit={handleSignup}>
								<div className="row mb-6 g-4">
									<div className="col-12 col-md-6">
										<div className="form-group">
											<input
												onChange={onChange}
												name="firstname"
												className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
												id="signUpInput1-1"
												style={{ borderRadius: '3px' }}
												type="text"
												placeholder="First name"
											/>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="form-group">
											<input
												onChange={onChange}
												name="lastname"
												className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
												id="signUpInput1-2"
												style={{ borderRadius: '3px' }}
												type="text"
												placeholder="Last name"
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<input
												onChange={onChange}
												name="email"
												className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
												id="signUpInput1-3"
												style={{ borderRadius: '3px' }}
												type="email"
												placeholder="Email address"
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<input
												onChange={onChange}
												name="password"
												className="bg-white text-dark px-5 py-4 w-100 border rounded-1"
												id="signUpInput1-4"
												style={{ borderRadius: '3px' }}
												type="password"
												placeholder="Password"
											/>
										</div>
									</div>
								</div>
								<button
									className="btn btn-primary px-5 py-2 my-3 text-uppercase"
									type="submit"
								>
									Sign up
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
