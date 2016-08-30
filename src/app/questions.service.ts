import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { last } from 'rxjs/operator/last';
import 'rxjs/Rx';

@Injectable()
export class QuestionsService {
  private databaseURL = "https://asktheworld-93836.firebaseio.com";

  constructor(private _http: Http) { }

  setQuestion() {
    const body = JSON.stringify({ text: "What?"});
    return this._http.post(this.databaseURL+'/questions.json', body)
      .map(response => response.json());
  }

  getQuestions() {
    return this._http.get(this.databaseURL+'/questions.json')
      .map(response => {
          let questions: Array<any> = [];
          for (var key in response.json()) {
            questions.push(response.json()[key])
          }
          return questions;
        });
  }
}
