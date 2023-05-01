import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITodoItem } from 'src/app/shared/interfaces/user.interface';
import { TodoService } from 'src/app/shared/services/todo.service';
import { AddTodoModalComponent } from '../add-todo-modal/add-todo-modal.component';
@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss'],
})
export class TodoHomeComponent implements OnInit, OnDestroy {
  todos: ITodoItem[] = [];
  done: ITodoItem[] = [];
  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
  ) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(123);
    this.todoService.getTodos().subscribe((todoItems) => {
      this.todos = todoItems;
      console.log('API Success :- ', todoItems);
    });
    console.log(456);
  }

  addTodo(): void {
    console.log(123);

    const modalRef = this.modalService.open(AddTodoModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.todos.push(result);
      }
      console.log(result);
    });
    console.log(456);
  }

  deleteItem(item: ITodoItem, deleteFromTodo: boolean): void {
    if (deleteFromTodo) {
      this.todos = this.todos.filter((todoItem) => {
        if (item.id === todoItem.id) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      this.done = this.done.filter((todoItem) => {
        if (item.id === todoItem.id) {
          return false;
        } else {
          return true;
        }
      });
    }
  }

  markAsDone(item: ITodoItem): void {
    item.isDone = true;
    this.deleteItem(item, true);
    this.done.push(item);
    console.log(this.done);
  }
}
