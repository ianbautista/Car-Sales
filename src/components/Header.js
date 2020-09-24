import React from "react";

const Header = (props) => {
	return (
		<>
			<figure className="image">
				<img src={props.car.image} alt={props.car.name} />
			</figure>
			<h2 className="title is-1">{props.car.name}</h2>
			<p className="subtitle is-3">Amount: ${props.car.price}</p>
		</>
	);
};

export default Header;
