import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class ManagementBar extends Component {
 
  showAll = () => {
    for (var i = 0; i < TodoStore.todos.length; i++) {
      TodoStore.todos[i].visibility = true;
    }
  };
  showCompleted = () => {
    for (var i = 0; i < TodoStore.todos.length; i++) {
      TodoStore.todos[i].visibility = TodoStore.todos[i].completed;
    }
  };
  showUncompleted = () => {
    for (var i = 0; i < TodoStore.todos.length; i++) {
      TodoStore.todos[i].visibility = !TodoStore.todos[i].completed;
    }
  };

  ClearCompleted = () => {
    TodoStore.todos = TodoStore.todos.filter(
      (todo) => todo.completed === false
    );
  };



  render() {    
    return (
      <div className="footer">
        <span className="todo-count"> {(TodoStore.todos.filter((item) => item.completed === false).length) > 1 ?
         `${TodoStore.todos.filter((item) => item.completed === false).length} items left` : 
         `${TodoStore.todos.filter((item) => item.completed === false).length} item left`}
        </span>
        <ul className="filters">
          <li>
            <a onClick={this.showAll}>all</a>
          </li>
          <li>
            <a onClick={this.showUncompleted}>active</a>
          </li>
          <li>
            <a onClick={this.showCompleted}>completed</a>
          </li>
        </ul>
        <button onClick={this.ClearCompleted} className="clear-completed">
          clear completed
        </button>
      </div>
    );
  }
}

export default ManagementBar;
