import React, { useContext, useEffect } from 'react';
import noteContext from '../Context/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
	const context = useContext(noteContext);
	const { notes, getNotes } = context;
	useEffect(() => {
		getNotes();
	}, []);

	return (
		<div className="grid row ">
			{notes.map((note) => {
				return <Noteitem key={note._id} note={note} />;
			})}
		</div>
	);
};

export default Notes;
