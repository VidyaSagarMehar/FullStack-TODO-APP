import React, { useContext, useState } from 'react';
import noteContext from '../Context/noteContext';
import LoadingBar from 'react-top-loading-bar';
import '../App.css';

const Form = () => {
	// setting the progress initial to Zero
	const [progress, setProgress] = useState(0);
	const context = useContext(noteContext);
	const { addNote } = context;

	const [note, setNote] = useState({ title: '', tasks: '' });
	const handleSubmit = (e) => {
		// setting the progress bar
		setProgress(progress + 40);
		e.preventDefault();
		addNote(note.title, note.tasks);
		// setting the progress bar
		setProgress(progress + 60);
		// After adding a note fields will be empty
		setNote({ title: '', tasks: '' });
		// setting the progress bar
		setProgress(progress + 100);
	};

	const onChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
		// setting the progress bar
		setProgress(progress + 0.5);
	};

	return (
		<div className="container text-light my-5">
			<LoadingBar
				color="#0B5ED7"
				height={4}
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<div>
				<h1>Add notes</h1>
				<h2>Your notes are secured in the cloud</h2>
			</div>
			<form
				onSubmit={handleSubmit}
				className="form-group d-flex align-items-center my-4"
			>
				<div className="mb-3 ">
					<input
						type="text"
						id="title"
						name="title"
						value={note.title}
						placeholder="Title"
						required
						onChange={onChange}
						className="form-control"
					/>
				</div>
				<div className="mb-3 ">
					<input
						type="text"
						id="tasks"
						name="tasks"
						value={note.tasks}
						placeholder="Notes"
						required
						onChange={onChange}
						className="form-control mx-4"
					/>
				</div>
				<button
					type="submit"
					className=" submit btn btn-primary mx-5"
					disabled={
						note.title.length < 5 ||
						note.tasks.length < 5 ||
						note.title.trim().length === 0 ||
						note.tasks.trim().length === 0
					}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
