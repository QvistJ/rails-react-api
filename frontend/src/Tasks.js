import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import Destroy from './Destory'

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  handleTasks() {
    const allTasks = this.state.tasks.map((task) => {
      return (
        <div>
          <hr className="taskLine"></hr>
          <div className="taskCard" key={task.id}>
            <h2>{task.title}</h2>
            <p>Status: {task.status}</p>
            <Link className="taskbtn" to={"/task/" + task.id}>Go to Task</Link>
          </div>
        </div>
      )
    })

    return <div>{allTasks}</div>
  }

  componentDidMount() {
    fetch('/tasks')
      .then(response => {
        return response.json();
      })
      .then((tasks) => {
        this.setState({tasks}); 
      });
  }

  render() {
    return (
      <div className="tasks">
        <h1>Tasks</h1>
        <div className="width50">{this.handleTasks()}</div>
      </div>
    )
  }
}


export default Tasks