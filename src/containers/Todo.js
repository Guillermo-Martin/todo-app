import React, { Component } from 'react';

class Todo extends Component {
  state = {
    showInput: false
  }

  // handleEdit function
  // will change state for showInput
  handleEdit = () => {
    if(this.state.showInput) {
      console.log("It's showing, so now i'll hide it");
      this.setState({showInput: false});
    } else {
      console.log("It's not showing, so now i'll show it");
      this.setState({showInput: true});
    }
  }

  render() {
    return (
      
      <div>
        {/* if this.state.showInput is "true" then show input; if "false" show todo */}
        {(this.state.showInput) 
          ? 
            <input></input>
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