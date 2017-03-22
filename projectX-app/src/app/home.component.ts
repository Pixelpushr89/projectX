import { Component, OnInit , Output} from '@angular/core';

import { HttpService } from "./services/http.service";
import { questService } from "./services/quests.service";
import { Quest } from "./models/quest.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [questService, HttpService]
})

export class HomeComponent implements OnInit {
  questIsActive = this.questService.isQuestActive();
  questIsActives = this.questService.isQuestActive();
  myUser: any = [];

  questlist : Quest[];

  constructor(
    private questService: questService,
    private httpService: HttpService
    ) { }

  onSendData(){
    this.httpService.sendCharData({name: 'test', gold: '1000', exp: 0, questIsActive: false})
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }
  
  onGetData(){
    this.questService.isQuestActive().subscribe(
        data => this.myUser = data,
        data => console.log(data)                   
    );
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
console.log("init",this.questIsActive);
    this.questlist = this.questService.getQuestList(); 

    //if(this.questIsActive){
   //   this.showActiveQuest();
  //  }
    
  }

  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    console.log(this.questIsActive);
  }

  showActiveQuest() {
    var time = 3;
    var setTimerInterval;

    function countDown() {  
      console.log(time);    
      if(time !== 0){
        time = time - 1; // oder +1
      }else {
        //clear
        clearInterval(setTimerInterval);    
      }
    }

    setTimerInterval = setInterval(() => { 
      countDown(); 
    }, 1000);   

    console.log("eine quest läuft");
   // setTimeout(() => {
    //    this.questIsActive = false;
  //   }, 1000)
  }
  
}
