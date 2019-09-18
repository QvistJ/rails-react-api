import React, { Component } from 'react';
import Form from './Form';

class Edit extends Component {
  render (){
    return (
      <Form taskId={this.props.match.params.id} />
    )
  }
}

export default Edit