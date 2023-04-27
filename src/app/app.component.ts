import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text = 'Angular Building Blocks';
  title = 'angular-basics';

  constructor() {}
  textChange(event: any) {
    console.log('Text Changed', event);
  }
}
