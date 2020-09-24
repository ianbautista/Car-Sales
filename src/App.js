import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { addFeature, removeFeature } from "./utils/actions";

const App = (props) => {
	const addFeature = (feature) => {
		props.addFeature(feature);
	};

	const removeFeature = (feature) => {
		props.removeFeature(feature);
	};

	return (
		<div className="boxes">
			<div className="box .content are-medium">
				<Header car={props.car} />
				<AddedFeatures car={props.car} removeFeature={removeFeature} />
			</div>
			<div className="box">
				<AdditionalFeatures
					additionalFeatures={props.additionalFeatures}
					addFeature={addFeature}
				/>
				<Total car={props.car} additionalPrice={props.additionalPrice} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		additionalFeatures: state.additionalFeatures,
		additionalPrice: state.additionalPrice,
		car: state.car,
	};
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
