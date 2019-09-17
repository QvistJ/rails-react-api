import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import Destroy from './Destory'

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.getAllTasks = this.getAllTasks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTasks() {
    const allTasks = this.state.tasks.map((task) => {
      return (
        <div key={task.id}>
          <p>____________________</p>
          <h2>{task.title}</h2>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <p>Points: {task.points}</p>
          <Link to={"/task/" + task.id}>Link to it</Link>
          <button onClick={this.handleSubmit(task.id)}>Delete Task</button>
          <p>____________________</p>
        </div>
      )
    })

    return <div>{allTasks}</div>
  }

  // <Destroy taskId={task.id} onclick={this.handleSubmit}/>
  
  handleSubmit (id) {
    return event => {
      event.preventDefault()
      console.log("CLICKED ME");
      const url = `/tasks/${id}`
      fetch(url, {
        method: 'DELETE'
      })

      setTimeout(this.getAllTasks,
        2
      )
    }
  }

  getAllTasks() {
    fetch('/tasks')
      .then(response => {
        return response.json();
      })
      .then((tasks) => { 
        console.log(tasks)
        this.setState({tasks}); 
      });
  }

  componentDidMount() {
    fetch('/tasks')
      .then(response => {
        return response.json();
      })
      .then((tasks) => { 
        console.log(tasks)
        this.setState({tasks}); 
      });
  }

  render() {
    return (
      <div>
        <h1>Tasks:</h1>
        {this.handleTasks()}
      </div>
    )
  }
}


export default Tasks