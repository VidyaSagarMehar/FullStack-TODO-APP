import React from 'react';

const Noteitem = (props) => {
	const { note } = props;
	return (
		<div>
			<p>{note.title}</p>
			<p>{note.tasks}</p>
		</div>
	);
};

export default Noteitem;
