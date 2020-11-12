import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => {
    return (
        <div>
            <h1>HATS PAGE</h1>;
        </div>
    );
};

function App() {
    return (
        <div>
            <Route path="/" component={Homepage}></Route>
            <Route path="/hats" component={HatsPage}></Route>
        </div>
    );
}

export default App;
