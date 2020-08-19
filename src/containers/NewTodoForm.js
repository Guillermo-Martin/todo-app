import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = {
    todo: ""
  }

  handleInputChange = event => {
    this.setState({ todo: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("connected");
    this.setState({ todo: "" });

  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleInputChange}
          />
          <button>Add To Do</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
