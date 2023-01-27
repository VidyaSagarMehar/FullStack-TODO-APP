import React, { useContext, useState } from 'react';
import noteContext from '../Context/noteContext';

const Form = () => {
	const context = useContext(noteContext);
	const { addNote } = context;

	const [note, setNote] = useState({ title: '', tasks: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		addNote(note.title, note.tasks);
	};

	const onChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1>Add notes</h1>
				<h2>Your notes are secured in the cloud</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Title"
						required
						onChange={onChange}
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						id="tasks"
						name="tasks"
						placeholder="Notes"
						required
						onChange={onChange}
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
