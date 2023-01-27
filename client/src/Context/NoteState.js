import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
	const host = 'http://localhost:4000';
	const notesInitial = [];
	const [notes, setNotes] = useState(notesInitial);

	//Get all Notes
	const getNotes = async () => {
		// API call
		const response = await fetch(`${host}/api/v1/note`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDRlMDExM2RmNjYxOWNlOWEzZGQ0In0sImlhdCI6MTY3NDgzODQxMywiZXhwIjoxNjc0ODQ1NjEzfQ.ucG9LnbwggHoRwY4Ez-z6TBxYGnzOV1zHov6_g41P_4',
			},
		});
		// const json = response.json();
		const json = await response.json();
		console.log(json.notes);
		setNotes(json.notes);
	};

	// Add a Note
	const addNote = async (title, tasks) => {
		// API call
		const response = await fetch(`${host}/api/v1/note`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDRlMDExM2RmNjYxOWNlOWEzZGQ0In0sImlhdCI6MTY3NDgzODQxMywiZXhwIjoxNjc0ODQ1NjEzfQ.ucG9LnbwggHoRwY4Ez-z6TBxYGnzOV1zHov6_g41P_4',
			},
			body: JSON.stringify({ title, tasks }),
		});
		// const json = response.json();

		// Logic to add from client
		const note = {
			_id: '63cd61d8e4cf17a762bs90b3',
			title: title,
			tasks: tasks,
			user: '63cd4e0113df6619ce9a3dd4',
			date: '2023-01-22T16:18:32.471Z',
			__v: 0,
		};
		setNotes(notes.concat(note));
	};

	// Delete a Note
	const deleteNote = async (id) => {
		// API call
		const response = await fetch(`${host}/api/v1/note/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDRlMDExM2RmNjYxOWNlOWEzZGQ0In0sImlhdCI6MTY3NDgzODQxMywiZXhwIjoxNjc0ODQ1NjEzfQ.ucG9LnbwggHoRwY4Ez-z6TBxYGnzOV1zHov6_g41P_4',
			},
		});
		const json = response.json();
		console.log(json);

		// Logic to delete from client
		const newNotes = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newNotes);
	};

	// Edit a Note
	const editNote = async (id, title, tasks) => {
		// API call
		const response = await fetch(`${host}/api/v1/note/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZDRlMDExM2RmNjYxOWNlOWEzZGQ0In0sImlhdCI6MTY3NDgzODQxMywiZXhwIjoxNjc0ODQ1NjEzfQ.ucG9LnbwggHoRwY4Ez-z6TBxYGnzOV1zHov6_g41P_4',
			},
			body: JSON.stringify({ title, tasks }),
		});
		const json = await response.json();

		// Logic to edit in client
		let newNotes = JSON.parse(JSON.stringify(notes));

		for (let index = 0; index < newNotes.length; index++) {
			const element = notes[index];
			if (element._id === id) {
				newNotes[index].title = title;
				newNotes[index].tasks = tasks;
				break;
			}
		}
		setNotes(newNotes);
	};

	return (
		<NoteContext.Provider
			value={{ notes, getNotes, editNote, deleteNote, addNote }}
		>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
