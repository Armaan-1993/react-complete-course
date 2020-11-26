import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop.component";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/shop" component={ShopPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
