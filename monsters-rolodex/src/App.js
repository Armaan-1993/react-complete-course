import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            monsters: [],
        };
    }

    componentDidMount() {
        console.log("didmount");
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }
    render() {
        console.log("render");
        return (
            <div className="App">
                {this.state.monsters.map((monster) => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}

export default App;
