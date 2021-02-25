import React, { Component } from "react";

class ClassComponent extends Component {

    render() {

        const { title, onButtonClicked } = this.props;
        
        return (
            <div>
                <h1>{title}</h1>
                <button onClick={onButtonClicked}>Click Me!</button>
            </div>
        );
    }
}

export default ClassComponent;