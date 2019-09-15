import React from 'react'
import {Link} from 'react-router-dom'

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: [],
    };
  }


  componentDidMount() {
    const url = `/tasks/${ this.props.match.params.id}`
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then((task) => { 
        this.setState({task}); 
      });
    
  }

  render() {
    return (
      <div>
        <Link to={"/"}>Go back</Link>
        <h1>{this.state.task.title}</h1>
        <p>{this.state.task.description}</p>
        <p>{this.state.task.points}</p>
        <p>{this.state.task.status}</p>
        <p>{this.state.task.created_at}</p>
        <p>{this.state.task.updated_at}</p>
        <Link to={"/task/" + this.state.task.id + "/edit"}>Edit</Link>
      </div>
    )
  }
}

export default Task