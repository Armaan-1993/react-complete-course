import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            string: "My name is Armaan Philip Mathew",
            age: 27,
        };
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>{this.state.string}</div>
                    <p>{this.state.age}</p>
                    <button
                        onClick={() =>
                            this.setState({
                                string: "My brother's name is Rehaan",
                            })
                        }
                    >
                        Click Me
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
