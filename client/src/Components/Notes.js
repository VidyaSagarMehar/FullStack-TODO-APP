import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
	const context = useContext(noteContext);
	const { notes } = context;

	return (
		<div className="grid row ">
			{notes.map((note) => {
				return <Noteitem key={note._id} note={note} />;
			})}
		</div>
	);
};

export default Notes;
