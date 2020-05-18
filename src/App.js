import React, { Component } from "react";
import "./App.css";
import TodoEntry from "./components/TodoEntry"
import TodoItems from "./components/TodoItems"
import ManagementBar from "./components/ManagementBar"


class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
        <ManagementBar/>
       
      </div>
    );
  }
}

export default App;
