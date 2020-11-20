import React from "react";
import "./App.css";
import Header from "./components/header.component/header";
import Home from "./components/home.component/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkout.component/checkout";
import Login from "./components/login.component/login";

function App() {
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
