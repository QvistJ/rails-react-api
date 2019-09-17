import React from 'react'

class Destroy extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("CLICKED ME");
    event.preventDefault();
    const url = `/tasks/${this.props.taskId}`
    fetch(url, {
        method: 'DELETE'
    })
  }

  render() {
    console.log(this.props.taskId)
    return (
    <button onClick={this.handleSubmit}>Delete Task</button>
    )
  }
}

export default Destroy