import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueBackgroundDirective } from './library/directives/blue-background.directive';
import { FormsModule } from '@angular/forms';
import { TodoModule } from './modules/todo/todo.module';

@NgModule({
  declarations: [AppComponent, BlueBackgroundDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
