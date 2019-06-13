import React, { Component } from 'react';

class TodoForm extends Component {
  state = { name: ''}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handledSubmit = (e) => {
    e.preventDefualt();

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          required 
          placeholder='add a todo here' 
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default TodoForm;