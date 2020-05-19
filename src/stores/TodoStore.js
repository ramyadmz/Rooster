import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  lastID = 0;
  @observable lastFilter ="all"
  @observable countText=" "
  @observable todos = [];

  @action addTodo(title) {
    this.todos.push(new TodoModel(this, this.lastID++, title, false, true));
  }
  @action fire(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  
}
const store = new TodoStore();
export default store;
