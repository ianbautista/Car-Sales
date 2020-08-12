import React from "react";

const AddedFeature = (props) => {
	return (
		<li className="has-text-primary">
			{/* Add an onClick to run a function to remove a feature */}
			<button
				className="button.is-rounded has-background-primary"
				onClick={() => props.removeFeature(props.feature)}
			>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
