import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lifecycles from "./components/lifcycles-component/lifecycles.component.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChild: true,
            text: "",
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <button
                        onClick={() => {
                            this.setState((state) => {
                                return { showChild: !state.showChild };
                            });
                        }}
                    >
                        Toggle Lifecycles
                    </button>

                    <button
                        onClick={() => {
                            this.setState((state) => {
                                return { text: state.text + "_hello" };
                            });
                        }}
                    >
                        Update Text
                    </button>

                    {this.state.showChild ? (
                        <Lifecycles text={this.state.text} />
                    ) : null}
                </header>
            </div>
        );
    }
}

export default App;
