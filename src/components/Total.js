import React from "react";

const Total = (props) => {
	return (
		<div className="content">
			<h4 className="tag is-success is-large">
				Total Amount: ${props.car.price + props.additionalPrice}
			</h4>
		</div>
	);
};

export default Total;
