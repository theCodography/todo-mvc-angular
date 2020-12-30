import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TodoService } from "./core/services/todo.service";

@Component({
  selector: "app-root",
  template: `
    <div class="wrapper is-flex is-flex-direction-column is-align-items-center w-100">
      <h1 class="title">todos</h1>
      <div class="is-justify-content-center w-50">
        <div class="todo-wrapper p-0 is-flex is-flex-direction-column">
          <app-header></app-header>
          <app-todo-list></app-todo-list>
          <app-footer></app-footer>
        </div>
      </div>
      <small class="instructions has-text-centered">
        <em>Press enter to add new todo. Press Arrow icon to toggle todos.</em>
        <br /><br />
        Copyright TodosMVC Project
      </small>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  hasTodo$: Observable<boolean>;
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    // this.todoService.fetchFromLocalStorage();
    // this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0));
  }
}
