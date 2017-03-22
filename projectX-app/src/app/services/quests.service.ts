import { Quest } from "../models/quest.model";
import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class questService {

  constructor (private http: Http) {}

  private questsList : Quest[] = [
    new Quest('Quest 1', 120, 100, 200),
    new Quest('Quest 2', 60, 80, 150)
  ];

  questIsActive:boolean = false;

  getQuestList() {
    return this.questsList;
  }

  getQuest(id: number){
    return this.questsList[id];
  }

  setQuestToActive() {
    this.questIsActive = true;
  }

  setQuestToInActive() {
    this.questIsActive = false;
  }

  isQuestActive(){
    return this.http.get('https://angulartest-d0269.firebaseio.com/charData.json')
      .map((response: Response) => {
        const data = response.json();
        const returnArray = [];
        for (let key in data) {
          returnArray.push(data[key]);
        }
        return returnArray;
      })
      
  }
}
