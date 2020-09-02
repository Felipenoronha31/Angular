import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';


@Component({
  selector: 'my-app', //<my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public todos: Todo[] = [];

  constructor() {
    this.todos.push({
      title: 'Passear com o cachorro', 
      done: false});
      this.todos.push({
      title: 'Ir ao supermercado', 
      done: false});
  }

  addTodo(){

  }

  removeTodo(todo) {
    this.todos.splice()
  }
}
