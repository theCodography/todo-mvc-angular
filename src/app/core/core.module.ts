import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TodoService } from "./services/todo.service";
import { LocalStorageService } from "./services/local-storage.service";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoListComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoListComponent,
  ],
  providers: [TodoService, LocalStorageService],
})
export class CoreModule {}
