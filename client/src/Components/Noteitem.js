import React, { useContext } from 'react';
import noteContext from '../Context/noteContext';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsTrash2, BsPencilSquare } from 'react-icons/bs';

const Noteitem = (props) => {
	const notify = () => {
		// Toast Emitter
		toast.error('note deleted!', {
			position: 'bottom-right',
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};
	const context = useContext(noteContext);
	const { deleteNote } = context;
	const { note, updateNote } = props;
	return (
		<div className="noteItem col-md-3 my-1">
			<ToastContainer
				position="bottom-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="card">
				<div className="card-body">
					<div className="">
						<div className="d-flex inline align-items-center justify-content-between">
							<BsPencilSquare
								onClick={() => {
									updateNote(note);
								}}
							/>
							<BsTrash2
								onClick={() => {
									deleteNote(note._id);
									notify();
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
