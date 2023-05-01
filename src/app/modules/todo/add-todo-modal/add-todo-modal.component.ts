import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.scss'],
})
export class AddTodoModalComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({});
  desc: string = '';
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      id: [(Math.random() + 1).toString(36).substring(7)],
      name: [null, [Validators.required]],
      isDone: [false],
    });
    console.log(this.todoForm);
  }

  submit(): void {
    if (this.todoForm.valid) {
      this.activeModal.close(this.todoForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
