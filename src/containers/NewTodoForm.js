import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  state = {
    todo: ""
  }

  handleInputChange = event => {
    this.setState({ todo: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // add id to state (spread current state and add id)
    let newTodo = {...this.state, id: uuidv4()}
    // pass todo from here to TodoList component
    this.props.addTodo(newTodo);
    this.setState({ todo: "" });
    // console.log(newTodo, "new todo console");
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
