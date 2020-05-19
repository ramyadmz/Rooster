import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class ManagementBar extends Component {
 
  showAll = () => {
    for (var i = 0; i < TodoStore.todos.length; i++) {
      TodoStore.todos[i].visibility = true;
    }
    TodoStore.lastFilter="all"
  };
  showUncompleted = () => {
    for (var i = 0; i < TodoStore.todos.length; i++) {
      TodoStore.todos[i].visibility = !TodoStore.todos[i].completed;
    }
    TodoStore.lastFilter="active"
  };
  showCompleted = () => {
    for (var i = 0; i < TodoStore.todos.length; i++) {
      TodoStore.todos[i].visibility = TodoStore.todos[i].completed;

    }
    TodoStore.lastFilter="completed"
  };

  ClearCompleted = () => {
    TodoStore.todos = TodoStore.todos.filter(
      (todo) => todo.completed === false
    );
  };



  render() {    
    return (
      <div className={(TodoStore.todos.length) > 0 ? "footer" : "hidden-footer" } >
        <span className="todo-count"> {(TodoStore.todos.filter((item) => item.completed === false).length) > 1 ?
         `${TodoStore.todos.filter((item) => item.completed === false).length} items left` : 
         `${TodoStore.todos.filter((item) => item.completed === false).length} item left`}
        </span>
        <ul className="filters">
          <li>
            <a className={TodoStore.lastFilter === "all" ? "selected" : ""} onClick={this.showAll}>all</a>
          </li>
          <li>
            <a className={TodoStore.lastFilter === "active" ? "selected" : ""} onClick={this.showUncompleted}>active</a>
          </li>
          <li>
            <a className={TodoStore.lastFilter === "completed" ? "selected" : ""} onClick={this.showCompleted}>completed</a>
          </li>
        </ul>
        <button onClick={this.ClearCompleted} className="clear-completed" >
        {(TodoStore.todos.filter((item) => item.completed === true).length) > 0 ? "clear completed" : " " }
        </button>
      </div>
    );
  }
}

export default ManagementBar;
