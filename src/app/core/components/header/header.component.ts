import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="is-flex is-align-items-center h-100">
      <span class="icon-wrapper h-100 has-text-centered">
        <i class="eva eva-chevron-down"></i>
      </span>
      <app-todo-input></app-todo-input>
    </div>
    
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
