import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { last } from 'rxjs/operator/last';
import { Question } from './question';
import 'rxjs/Rx';

@Injectable()
export class QuestionsService {
  private databaseURL = "https://asktheworld-93836.firebaseio.com";

  constructor(private _http: Http) { }

  setQuestion(question: Question) {
    const body = JSON.stringify({ text: question.text, user: question.user});
    return this._http.post(this.databaseURL+'/questions.json', body)
      .map(response => response.json());
  }

  getQuestions() {
    return this._http.get(this.databaseURL+'/questions.json')
      .map(response => {
          let questions: Array<Question> = [];
          for (var key in response.json()) {
            questions.push(new Question(response.json()[key].text, response.json()[key].user))
          }
          return questions;
        });
  }
}
