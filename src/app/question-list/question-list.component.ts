import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'question-list',
  templateUrl: 'question-list.component.html',
  styleUrls: ['question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.questions.push('What?');
    this.questions.push('Why?');
    this.questions.push('Where?');
    this.questions.push('When?');
  }

}
