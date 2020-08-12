import React from "react";

const AddedFeature = (props) => {
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button
				className="button is-primary is-rounded is-small"
				onClick={() => props.removeFeature(props.feature)}
			>
				X
			</button>{" "}
			&nbsp;
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
