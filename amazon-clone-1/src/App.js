import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header.component/header";
import Home from "./components/home.component/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkout.component/checkout";
import Login from "./components/login.component/login";
import { auth } from "./firebase";

function App() {
    useEffect(() => {
        //useeffect will run once when the App component loads. its used to keep track of the users signed in
        auth.onAuthStateChanged((authUser) => {
            console.log(`The user is ${authUser}`);

            if (authUser) {
                //the user has logged in/was logged in
            } else {
                //the user is logged out
            }
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
