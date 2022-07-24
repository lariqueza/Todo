import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  inputTodo:string=""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ];
  }

  //check todos list
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;
      return v
    })
  }

  //delete todos
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  //add todo
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    //clear input field
    this.inputTodo = "";
  }
}
