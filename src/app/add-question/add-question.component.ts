import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';

@Component({
  moduleId: module.id,
  selector: 'add-question',
  templateUrl: 'add-question.component.html',
  styleUrls: ['add-question.component.css'],
  providers: [ QuestionsService ]
})
export class AddQuestionComponent implements OnInit {

  constructor(private _questionsService: QuestionsService) { }

  ngOnInit() {
  }

  addQuestion(value) {
    this._questionsService.setQuestion(new Question(value, 'user')).subscribe(null, error => console.log(error));
    //console.log('Add a question: ' + value);
  }
}
