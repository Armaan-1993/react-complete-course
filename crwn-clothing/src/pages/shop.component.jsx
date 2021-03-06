import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../components/collections-overview/collections-overview";
import CollectionPage from "../pages/collection/collection.component";

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            ></Route>
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            ></Route>
        </div>
    );
};

export default ShopPage;
