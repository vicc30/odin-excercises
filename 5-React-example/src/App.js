import React from 'react';

import ClassComponent from './ClassComponent';
import FucntionalComponent from './FunctionalComponent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.countUp = this.countUp.bind(this);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {
    return (
      <div>
        <ClassComponent title="Just Click" onButtonClicked={this.onClickBtn}></ClassComponent>
        <ClassComponent title="Count up" onButtonClicked={this.countUp}></ClassComponent>
        <p>{this.state.count}</p>
        <FucntionalComponent title={"Hello"}></FucntionalComponent>
      </div>
    );
  }
}

export default App;
