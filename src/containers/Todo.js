import React, { Component } from 'react';

class Todo extends Component {
  state = {
    showInput: false,
    editTodo: ""
  }

  // handleEdit function
  // will change state for showInput
  handleEdit = () => {
    if(this.state.showInput) {
      this.setState({showInput: false});
    } else {
      // when input is shown, pass todo to editTodo state, which will be the input value in form
      this.setState({showInput: true, editTodo: this.props.todo});
    }
  }

  handleInputChange = event => {
    this.setState({ editTodo: event.target.value });
  }

  render() {
    return (
      
      <div>
        {/* if this.state.showInput is "true" then show input; if "false" show todo */}
        {(this.state.showInput) 
          ? 
            <form>
              <input 
                type="text"
                name="editTodo"
                value={this.state.editTodo}
                onChange={this.handleInputChange}
              />
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