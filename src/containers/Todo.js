import React, { Component } from 'react';

class Todo extends Component {
  state = {
    showInput: false,
    currentTodo: "",
  }

  // handleEdit function
  // will change state for showInput
  handleEdit = () => {
    if(this.state.showInput) {
      this.setState({showInput: false});
    } else {
      // when input is shown, pass the current todo to the currentTodo state, which will be the value in form below
      this.setState({showInput: true, currentTodo: this.props.todo});
    }
  }

  handleInputChange = event => {
    this.setState({ currentTodo: event.target.value });
  }

  handleEditSubmit = event => {
    event.preventDefault();
    // pass edited todo and its id to the TodoList component
    this.props.edit(this.state.currentTodo, this.props.id);
    this.setState({showInput: false});
    // console.log("you edited me");
  }

  render() {
    return (
      
      <div>
        {/* if this.state.showInput is "true" then show input; if "false" show todo */}
        {(this.state.showInput) 
          ? 
            <form onSubmit={this.handleEditSubmit}>
              <input 
                type="text"
                name="editTodo"
                value={this.state.currentTodo}
                onChange={this.handleInputChange}
              />
              <button>Save</button>
            </form>
            
          : 
            <p>
              {this.props.todo}
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
            </p>
        }

      </div>
    )
  }
}


export default Todo;