import { Component, OnInit } from '@angular/core';
import { QuestionListComponent } from './question-list';
import { QuestionsService } from './questions.service';
import { AddQuestionComponent } from './add-question';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ QuestionListComponent, AddQuestionComponent ],
  providers: [ QuestionsService ]
})
export class AppComponent implements OnInit {
  title = 'Hello World!';
  questions: Array<any> = [];
  
  constructor(private _questionsService: QuestionsService) {}

  ngOnInit() {
    this._questionsService.getQuestions()
      .subscribe(
        questions => this.questions = questions,
        error => console.log(error)
      );
  }

}
