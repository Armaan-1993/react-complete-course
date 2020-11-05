import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theYearThatSucks: 2020 + this.props.in,
        };
    }
    update = () => {
        this.setState((prevState, prevProps) => {
            return {
                theYearThatSucks:
                    prevState.theYearThatSucks + this.props.increment,
            };
        });
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
