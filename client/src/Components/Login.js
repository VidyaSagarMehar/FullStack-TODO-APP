import React from 'react';

const Login = () => {
	return (
		<div className="">
			<main className="container">
				<article className="grid">
					<div>
						<hgroup>
							<h1>Sign in</h1>
							<h2>A minimalist layout for Login pages</h2>
						</hgroup>
						<form>
							<input
								type="text"
								name="login"
								placeholder="Login"
								aria-label="Login"
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
								Login
							</button>
						</form>
					</div>
					<div></div>
				</article>
			</main>
		</div>
	);
};

export default Login;
