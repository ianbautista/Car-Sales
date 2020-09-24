import React from "react";

const AddedFeature = (props) => {
	return (
		<li className="tag is-primary is-large">
			{props.feature.name}
			{/* Add an onClick to run a function to remove a feature */}
			<button className="delete" onClick={() => props.removeFeature(props.feature)}>
				X
			</button>{" "}
			&nbsp;
		</li>
	);
};

export default AddedFeature;
