import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ITodoItem } from 'src/app/shared/interfaces/user.interface';
@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss'],
})
export class TodoHomeComponent implements OnInit, OnDestroy {
  todos: ITodoItem[] = [];
  done: ITodoItem[] = [];
  constructor() {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log('NgOnint called');
    this.todos.push({
      name: 'Learn Angular',
      isDone: false,
    });
    this.todos.push({
      name: 'Learn React',
      isDone: false,
    });
    this.done.push({
      name: 'Learn Vue',
      isDone: false,
    });
    console.log(this.todos);
  }
}
