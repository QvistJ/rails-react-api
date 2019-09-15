import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        title: props.title,
        description: props.description,
        points: props.points,
        status: props.status,
      },
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTask(key, value) {
    console.log(key);
    console.log(value);
    this.setState(prevState => ({
      task: {
        ...prevState.task,
        [key]: value,
      },
    }));
    console.log(this.state);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.value;
    this.updateTask(name, value);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const sendToAPI = this.state.task
    const url = "/tasks"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: sendToAPI.title,
        description: sendToAPI.description,
        points: sendToAPI.points,
        status: sendToAPI.status,
      })
    })

    this.setState(prevState => ({
      ...prevState.task,
      redirect: true,
    }));
  }

  render (){
    const { task } = this.state;
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <strong>Title:</strong>
              <input
                type="text"
                id="title"
                name="title"
                value={task.title}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Description:</strong>
              <input
                type="textarea"
                id="description"
                name="description"
                value={task.description}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Points:</strong>
              <input
                type="number"
                id="points"
                name="points"
                value={task.points}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Status:</strong>
              <select id="status" name="status" value={this.state.task.status} onChange={this.handleChange}>
                <option value="Done">Done</option>
                <option value="TODO">TODO</option>
                <option value="Review">Review</option>
                <option value="Ongoing">Ongoing</option>
              </select>
            </label>
            <div>
              <input type="submit" value="Create" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Create