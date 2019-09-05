import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';

class App extends Component {
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