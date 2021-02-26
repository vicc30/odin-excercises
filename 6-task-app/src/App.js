//App.js is going to handle the input field with the logic
import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "",
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
      const tasks = state.tasks.concat(this.state.value);

      return {
        tasks,
        value: ""
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
