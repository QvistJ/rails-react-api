import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
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
        this.setState({ tasks }); 
      });
      
}

  render (){
    return (
      <div>
        <nav>
          <a href="/show">Show</a>
          <a href="/create">Create</a>
        </nav>
        <Tasks />
      </div>
    )
  }
}

export default App