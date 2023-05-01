import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHomeComponent } from './todo-home/todo-home.component';

const routes: Routes = [
  {
    path: 'todo-home',
    component: TodoHomeComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'todo-home',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
