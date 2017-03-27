import { Quest } from "../models/quest.model";
import { Http, Headers, Response } from "@angular/http";
import { Injectable, Input, Output, EventEmitter } from "@angular/core";
import 'rxjs/Rx';

// Name Service
export interface myData {
   name:string;
}

@Injectable()
export class questService {
  sharingData: myData={name:"nyks"};
  counterValue = 34;

  constructor (private http: Http) {}

  private questsList : Quest[] = [
    new Quest('Quest 1', 120, 100, 200),
    new Quest('Quest 2', 60, 80, 150)
  ];

  questIsActive:boolean = false;

  getDataString() {
    console.log('get data function called');
    return this.sharingData.name;
  }

  saveData(str){
    console.log('save data function called' + str + this.sharingData.name);
    this.sharingData.name=str; 
  }

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
      //  for (let key in data) {
      //    returnArray.push(data[key]);
     //   }
     //console.log(data.questIsActive);
        return data;
      })
      
  }

  @Output() counterChange = new EventEmitter();
  
  @Input()
  get counter() {
    return this.counterValue;
  }
  
  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }
  
  decrement() {
    this.counterValue--;
  }
  
  increment(value: number) {    
    value++;
    console.log(value);
    return value;
  }
}
