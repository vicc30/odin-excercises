//App.js is going to handle the input field with the logic
import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "",
      count: 1,
      tasks: []
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onChangeInput(e) {
    this.setState({ value: e.target.value });
  }

  onClickBtn(e) {
    this.setState(state => {
      const tasks = state.tasks
        .concat({ name: this.state.value, count: this.state.count });
      const count = state.count + 1;

      return {
        tasks,
        value: "",
        count
      }
    });
    e.preventDefault();
  }

  render() {

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" onChange={this.onChangeInput} value={this.state.value} />
          <button type="submit" onClick={this.onClickBtn}>
            Add Task
          </button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
