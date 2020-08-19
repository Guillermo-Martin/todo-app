import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = {
    todo: ""
  }

  handleInputChange = event => {
    this.setState({todo: event.target.value})
  }

  render () {
    return (
      <div>
        <form>
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
