import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodoItem } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItems: ITodoItem[] = [];
  @Output() deleteClicked = new EventEmitter();
  @Output() markAsDoneClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteItem(item: ITodoItem): void {
    this.deleteClicked.emit(item);
  }

  markAsDone(item: ITodoItem): void {
    this.markAsDoneClicked.emit(item);
  }
}
