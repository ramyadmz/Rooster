import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";


class TodoEnrty extends Component {
  state = {
    value: "",
  };
  handleKeyDown = (event) => {
    if (event.keyCode !== 13) {
      return;
    }

    TodoStore.addTodo(this.state.value);
    this.setState({
      value: "",
    });
    
  };
  render() {
    return (
      <header className="header">
        <img src="./images/logo.jpg"/>
        <h1>todo</h1>
        <input
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
          onKeyDown={(event) => this.handleKeyDown(event)}
          type="text"
          className="new-todo"
          placeholder="what needs to be done?"
        />
      </header>
    );
  }
}

export default TodoEnrty;
