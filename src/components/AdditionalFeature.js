import React from "react";

const AdditionalFeature = (props) => {
	return (
		<li className="has-background-primary-light">
			{/* Add an onClick that will let you add a feature to your car */}
			<button
				className="button is-primary is-rounded is-small"
				onClick={() => props.addFeature(props.feature)}
			>
				Add
			</button>{" "}
			&nbsp;
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
