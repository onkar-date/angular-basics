import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoModalComponent } from './add-todo-modal/add-todo-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoHomeComponent, TodoItemComponent, AddTodoModalComponent],
  imports: [CommonModule, TodoRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [TodoHomeComponent],
})
export class TodoModule {}
