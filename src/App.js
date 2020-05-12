import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <header className="header">
          <h1>todo</h1>
          <input
            type="text"
            className="new-todo"
            placeholder="what needs to be done?"
          />
        </header>
        <section className="main">
          <ul className="todo-list">
            <li>
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label>new work</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li className="completed">
              <div className="view">
                <input type="checkbox" className="toggle" value="on" checked={false} />
                <label>old work</label>
                <button className="destroy"></button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
