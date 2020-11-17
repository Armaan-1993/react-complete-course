import React from "react";
import "./App.css";
import Header from "./components/header.component/header";
import Home from "./components/home.component/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkout.component/checkout";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
