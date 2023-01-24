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
		<div className="container" data-theme="dark">
			<hgroup>
				<h1>Add notes</h1>
				<h2>Your notes are secured in the cloud</h2>
			</hgroup>
			<form onSubmit={handleSubmit}>
				<div className="grid">
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Title"
						required
						onChange={onChange}
					/>

					<input
						type="text"
						id="tasks"
						name="tasks"
						placeholder="Notes"
						required
						onChange={onChange}
					/>
				</div>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Form;
