import React from "react";

class Lifecycles extends React.Component {
    constructor() {
        super();
        console.log("constructor!");
    }
    componentDidMount() {
        console.log("Compnent did mount!");
    }
    componentDidUpdate() {
        console.log("Component did Update!");
    }
    shouldComponentUpdate(nextProp, nextState) {
        console.log("shouldcomponentupdate ," + nextProp);
        return nextProp.text != this.props.text;
    }

    render() {
        return (
            <div Lifecycles={this.state.text}>
                <h3>LIFECYCLES COMPONENT</h3>
                {this.state.text}
            </div>
        );
    }
}
