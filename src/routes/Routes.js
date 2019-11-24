import React from 'react';
import { Route, Switch } from "react-router-dom";
import UnderConstruction from "../pages/Error/UnderConstruction";
import NotFound from "../pages/Error/PageNotFound";
import StoreInfo from "../pages/StoreInfo";


const Routes = () => (
    <>
        <Switch>
            <Route exact path="/" component={StoreInfo} />
            <Route exact path="/company-info" component={UnderConstruction} />
            <Route exact path="/market" component={UnderConstruction} />
            <Route exact path="/orders" component={UnderConstruction} />
            <Route exact path="/overview" component={UnderConstruction} />
            <Route exact path="/statistic" component={UnderConstruction} />
            <Route exact path="/supplier-list" component={UnderConstruction} />
            <Route exact path="/user-management" component={UnderConstruction} />
            <Route exact path="/store-info" component={StoreInfo} />
            <Route component={NotFound} />
        </Switch>
    </>
)

export default Routes
