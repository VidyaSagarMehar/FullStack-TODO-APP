import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';

import { BsTrash2, BsPencilSquare } from 'react-icons/bs';

const Noteitem = (props) => {
	const context = useContext(noteContext);
	const { deleteNote } = context;
	const { note } = props;
	return (
		<div className="col-md-3 my-1">
			<div className="card">
				<div className="card-body">
					<div className="">
						<div className="d-flex inline align-items-center justify-content-between">
							<BsPencilSquare />
							<BsTrash2
								onClick={() => {
									deleteNote(note._id);
								}}
							/>
						</div>
					</div>
					<div>
						<p className="card-title">{note.title}</p>
						<p className="card-text">{note.tasks}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Noteitem;
