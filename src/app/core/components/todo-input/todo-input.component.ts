import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-input",
  template: `
    <input
      type="text"
      class="w-100 h-100"
      placeholder="What needs to be done"
      required
    />
  `,
  styles: [],
})
export class TodoInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
