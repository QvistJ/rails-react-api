import React from 'react'
import {Link,Redirect} from 'react-router-dom'

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: [],
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit (id) {
    return event => {
      event.preventDefault()
      const url = `/tasks/${id}`
      fetch(url, {
        method: 'DELETE'
      })
      this.setState({
        redirect: true,
      })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="taskTab">
        <Link className="taskbtn" to={"/"}>Back</Link>
        <h1>{this.state.task.title}</h1>
        <p>{this.state.task.description}</p>
        <p>{this.state.task.points}</p>
        <p>{this.state.task.status}</p>
        <p>{this.state.task.created_at}</p>
        <p>{this.state.task.updated_at}</p>
        <div className="btn-space">
          <Link className="taskbtn" to={"/task/" + this.state.task.id + "/edit"}>Edit</Link>
          <button className="taskbtn2" onClick={this.handleSubmit(this.state.task.id)}>Delete Task</button>
        </div>
      </div>
    )
  }
}

export default Task