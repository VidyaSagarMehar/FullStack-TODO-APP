import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';

import { BsTrash2, BsPencilSquare } from 'react-icons/bs';

const Noteitem = (props) => {
	const context = useContext(noteContext);
	const { deleteNote } = context;
	const { note } = props;
	return (
		<div>
			<span className="grid row">
				<BsPencilSquare />
				<BsTrash2
					onClick={() => {
						deleteNote(note._id);
					}}
				/>
				<p>{note.title}</p>
			</span>
			<p>{note.tasks}</p>
		</div>
	);
};

export default Noteitem;
