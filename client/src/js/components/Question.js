import React, { PropTypes} from 'react';

function Question (props) {
	const createdAt = moment(props.createdAt).format("MMMM Do YYYY, h:mm:ss A");
	return (
		<div className="grid-parent question">
			<div className="grid-10">
				<img className="avatar" src="/images/avatar.png" alt="avatar"/>
			</div>
			<div className="grid-90">
				<p>{props.text}</p>
				<small className="align-right block">Asked <strong>{createdAt}</strong></small>
			</div>
		</div>
	)
}

Question.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	createdAt: PropTypes.string
};

export default Question;