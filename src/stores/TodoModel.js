import {observable,action} from "mobx"

export default class TodoModel {
    store
    id
    @observable title
    @observable completed
    @observable visibility
    constructor(store, id ,title,completed,visibility){
        this.store = store,
        this.id = id,
        this.title = title,
        this.completed = completed,
        this.visibility = visibility;

    }
    @action toggle(){
        this.completed = !this.completed
    }
}