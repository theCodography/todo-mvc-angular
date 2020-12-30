import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <app-todo-item></app-todo-item>
    <app-todo-item></app-todo-item>
    <app-todo-item></app-todo-item>
    
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
