import React from 'react';

const Form = () => {
	return (
		<div className="container" data-theme="dark">
			<hgroup>
				<h1>Add notes</h1>
				<h2>Your notes are secured in the cloud</h2>
			</hgroup>
			<form>
				<div className="grid">
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Title"
						required
					/>

					<input
						type="text"
						id="note"
						name="note"
						placeholder="Notes"
						required
					/>
				</div>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Form;
