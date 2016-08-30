import { Component } from '@angular/core';
import { QuestionListComponent } from './question-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ QuestionListComponent ]
})
export class AppComponent {
  questions: Array<string> = [
    'What?',
    'Why?',
    'Where?',
    'When?'
  ];
  title = 'Hello World!';
}
