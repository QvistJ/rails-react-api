import React from 'react'

class Destroy extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `/tasks/${this.props.taskId}`
    fetch(url, {
        method: 'DELETE'
    })
  }

  render() {
    return (
    <button onClick={this.handleSubmit}>Delete Task</button>
    )
  }
}

export default Destroy