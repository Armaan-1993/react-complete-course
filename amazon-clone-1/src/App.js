import React from "react";
import "./App.css";
import Header from "./components/header.component/header";
import Home from "./components/home.component/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <h1>Yooo waddup</h1>
                        <Header />
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
