import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
	const notesInitial = [
		{
			_id: '63cd61d6e4cf17a762b290af',
			title: 'Saturday',
			tasks: 'Need to go to park',
			user: '63cd4e0113df6619ce9a3dd4',
			date: '2023-01-22T16:18:30.216Z',
			__v: 0,
		},
		{
			_id: '63cd61d7e4cf17a762b290b1',
			title: 'Saturday',
			tasks: 'Need to go to park',
			user: '63cd4e0113df6619ce9a3dd4',
			date: '2023-01-22T16:18:31.171Z',
			__v: 0,
		},
		{
			_id: '63cd61d8e4cf17a762b290b3',
			title: 'Saturday',
			tasks: 'Need to go to park',
			user: '63cd4e0113df6619ce9a3dd4',
			date: '2023-01-22T16:18:32.471Z',
			__v: 0,
		},
	];
	const [notes, setNotes] = useState(notesInitial);

	return (
		<NoteContext.Provider value={{ notes, setNotes }}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
