import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
	};

	const onChange = (e) => {
		setCredential({ ...credential, [e.target.name]: e.target.value });
	};

	return (
		<section
			className="position-relative pt-32 pb-36 overflow-hidden my-4"
			style={{
				background:
					'linear-gradient(98.24deg, #FFFFFF 0%, #F9F9FF 47.4%, #EBECF7 100%)',
			}}
		>
			<img
				className="position-absolute top-50 start-0 translate-middle-y"
				src="gradia-assets/elements/sign-up/radial.svg"
				alt=""
			/>
			<div className="position-relative container" style={{ zIndex: '50' }}>
				<div className="row g-16">
					<div className="col-12 col-md-6">
						<div className="mw-md-lg">
							<h2 className="fs-10 mb-3">Join Keep Notes for free</h2>
							<p className="fs-17 text-muted mb-12">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Malesuada tellus vestibulum, commodo pulvinar.
							</p>
						</div>
						<form className="mw-md-xl" onSubmit={handleLogin}>
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
								className="btn btn-light-light fs-20 px-9 py-5 text-uppercase"
								type="submit"
								style={{
									letterSpacing: '1px',
									background:
										'linear-gradient(98.24deg, #CEE9C1 0%, #83C8DE 100%)',
								}}
							>
								Log in
							</button>
						</form>
					</div>
					<div className="col-12 col-md-6">
						<div className="mw-md-lg ms-auto">
							<div className="mb-12">
								<p className="fs-16 mb-8">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
									urna aliquet malesuada gravida viverra vehicula. Elementum,
									fusce in eu nunc viverra. Diam enim, varius tincidunt orci sed
									mauris. Eu sed risus tempor lorem.
								</p>
							</div>
							<div>
								<p className="fs-16 mb-8">
									Elementum, fusce in eu nunc viverra. Diam enim, varius
									tincidunt orci sed mauris. Eu sed risus tempor lorem ipsum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
