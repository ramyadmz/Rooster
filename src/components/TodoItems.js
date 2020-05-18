import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <ul className="todo-list">
            {TodoStore.todos
              .filter((item) => item.visibility === true)
              .map((todo) => {
                return <TodoItem todo={todo} />;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoItems;
