import React from "react";

const AdditionalFeature = (props) => {
	return (
		<li className="has-background-primary-light">
			{/* Add an onClick that will let you add a feature to your car */}
			<button className="has-text-primary" onClick={() => props.addFeature(props.feature)}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
