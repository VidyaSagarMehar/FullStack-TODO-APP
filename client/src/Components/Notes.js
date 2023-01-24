import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
	const context = useContext(noteContext);
	const { notes, setNotes } = context;

	return (
		<div className="grid row ">
			{notes.map((note) => {
				return <Noteitem note={note} />;
			})}
		</div>
	);
};

export default Notes;
