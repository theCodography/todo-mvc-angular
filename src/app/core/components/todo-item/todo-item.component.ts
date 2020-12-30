import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-item",
  template: `
    <div
      class="todo-item is-flex is-justify-content-space-between is-align-items-center"
      (mouseover)="isHovered = true"
      (mouseout)="isHovered = false"
    >
      <div class="todo">
        <input type="checkbox" class="toggle has-text-centered" />
        <label>Todo Item</label>
      </div>
      
      <div class="is-flex is-align-items-center">
        <span
          class="icon-wrapper has-text-centered edit"
          [ngClass]="{ active: isHovered }"
        >
          <i class="eva eva-edit-outline" (click)="isEditing = true"></i>
        </span>
        <span
          class="icon-wrapper has-text-centered edit"
          [ngClass]="{ active: isHovered }"
        >
          <i class="eva eva-close"></i>
        </span>
      </div>

      <form class="edit-form" *ngIf="isEditing">
        
          <input type="text" name="editTodo">
          
      </form>
    </div>
  `,
  styles: [],
})
export class TodoItemComponent implements OnInit {
  isHovered = false;
  isEditing = false;

  constructor() {}

  ngOnInit(): void {}
}
