import React from 'react'

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
        console.log(response);
        return response.json();
      })
      .then((task) => { 
        console.log(task);
        this.setState({task}); 
      });
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.task.title}</h1>
        <p>{this.state.task.description}</p>
        <p>{this.state.task.points}</p>
        <p>{this.state.task.status}</p>
        <p>{this.state.task.created_at}</p>
        <p>{this.state.task.updated_at}</p>
      </div>
    )
  }
}

export default Task