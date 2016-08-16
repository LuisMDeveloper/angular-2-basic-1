import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1 class='title'>
    {{title}}
  </h1>
  `,
  styles: [`
    .title {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'Hello World!';
}
