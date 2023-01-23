import React from 'react';

const Signup = () => {
	return (
		<div className="">
			<main className="container">
				<article className="grid">
					<div>
						<hgroup>
							<h1>Sign up</h1>
							<h2>A minimalist layout for Login pages</h2>
						</hgroup>
						<form>
							<input
								type="text"
								name="fname"
								placeholder="First name"
								aria-label="fname"
								autocomplete="nickname"
								required
							/>
							<input
								type="text"
								name="lname"
								placeholder="Last name"
								aria-label="lname"
								autocomplete="nickname"
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Email address"
								aria-label="email"
								autocomplete="nickname"
								required
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								aria-label="Password"
								autocomplete="current-password"
								required
							/>
							<fieldset>
								<label for="remember">
									<input
										type="checkbox"
										role="switch"
										id="remember"
										name="remember"
									/>
									Remember me
								</label>
							</fieldset>
							<button
								type="submit"
								className="contrast"
								onclick="event.preventDefault()"
							>
								Signup
							</button>
						</form>
					</div>
					<div></div>
				</article>
			</main>
		</div>
	);
};

export default Signup;
