import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";



@observer
class TodoItem extends Component {
  onToggle=()=> {
    this.props.todo.toggle();
  }
  onFire=()=>{
    TodoStore.fire(this.props.todo.id)

  }

  render() {
    const { todo } = this.props;

    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button onClick={this.onFire} className="destroy"></button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
