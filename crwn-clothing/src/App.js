import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop.component";
import Header from "./components/header.component/header";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in-sign-up";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/shop" component={ShopPage}></Route>
                <Route path="/signin" component={SignInAndSignUpPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
