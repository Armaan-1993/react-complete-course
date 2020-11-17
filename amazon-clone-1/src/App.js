import React from "react";
import "./App.css";
import Header from "./components/header.component/header";
import Home from "./components/home.component/home";
import { Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                    <Route path="/checkout">
                        <h1>My router beeches</h1>
                        <Header />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
