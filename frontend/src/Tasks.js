import React, { Component } from 'react'

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  handleTasks() {
    console.log("in ths stif");
    console.log(this.state.tasks);

    const allTasks = this.state.tasks.map((task) => {
      return (
        <div key={task.id}>
          <p>____________________</p>
          <h2>{task.title}</h2>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <p>Points: {task.points}</p>
          <p>____________________</p>
        </div>
      )
    })

    return <div>{allTasks}</div>
  }

  componentDidMount() {
    fetch('/tasks')
      .then(response => {
        console.log("Here now1");
        console.log(response);
        return response.json();
      })
      .then((tasks) => { 
        console.log("Here now");
        console.log(tasks);
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