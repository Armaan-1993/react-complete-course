import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            theYearThatSucks: 2020,
        };
    }
    update = () => {
        this.setState(
            { theYearThatSucks: this.state.theYearThatSucks + 1 },
            () => console.log(this.state.theYearThatSucks),
        );
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{this.state.theYearThatSucks}</p>
                    <button onClick={this.update}>Update my State</button>
                </header>
            </div>
        );
    }
}

export default App;
