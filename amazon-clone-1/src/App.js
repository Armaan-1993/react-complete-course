import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header.component/header";
import Home from "./components/home.component/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkout.component/checkout";
import Login from "./components/login.component/login";
import { auth } from "./firebase";
import { useStateValue } from "./state-provider/state-provider";

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        //useeffect will run once when the App component loads. its used to keep track of the users signed in
        auth.onAuthStateChanged((authUser) => {
            console.log(`The user is ${authUser}`);

            if (authUser) {
                //the user has logged in/was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                //the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
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
