//App.js is going to handle the input field with the logic
import React from 'react';
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "",
      count: 1,
      tasks: [],
      counter: []
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter() {
    let newCounter = [];
    for (let i = 1; i <= this.state.count; i++) {
      newCounter.push(i);
    }
    this.setState({ counter: newCounter });
  }

  onChangeInput(e) {
    this.setState({ value: e.target.value });
  }

  onClickBtn(e) {
    this.setState(state => {
      const tasks = state.tasks
        .concat({ name: this.state.value, id: uniqid.time() });
      const count = state.count + 1;

      return {
        tasks,
        value: "",
        count
      }
    });
    this.updateCounter();
    e.preventDefault();
  }

  onDeleteTask(e) {
    const toRemove = e.target.parentElement.id;
    this.setState(state => {
      const tasks = state.tasks.filter((task) =>
        task.id !== toRemove)
      const count = state.count - 1;
      return {
        tasks,
        count
      }
    });
    this.updateCounter();
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
        <Overview tasks={this.state.tasks} onDelete={this.onDeleteTask} />
      </div>
    );
  }
}

export default App;
