import React, { Component } from "react";

// React Router
import { Route } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/actions/shopActions";

// Components
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CollectionContainer from "../collection/CollectionContainer";
class Shop extends Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionContainer}
				/>
			</div>
		);
	}
}

export default connect(null, { fetchCollectionsStartAsync })(Shop);
