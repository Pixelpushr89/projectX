import { Component, OnInit , Output, OnChanges, SimpleChange, Input, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

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
  questIsActive = false;  
  myChar: any = [];

  counterValue = this.questService.counterValue;
  newValue : any;

  questlist : Quest[];

  constructor(
    private questService: questService,
    private httpService: HttpService,
    private router : Router
    ) {
      router.events.subscribe((questIsActive) => {
        // see also 
        console.log("pe",questIsActive) 
      });      
    }

  onSendData(){
    this.httpService.sendCharData({name: 'test', gold: '1000', exp: 0, questIsActive: false})
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }
  
  onGetData(){
    this.questService.isQuestActive().subscribe(
        data => this.myChar = data                      
    );
  }

  updateTest(){
    this.questIsActive = true;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
console.log("init",this.questIsActive);
    this.questlist = this.questService.getQuestList(); 
 this.onGetData();
    //if(this.questIsActive){
   //   this.showActiveQuest();
  //  }
    
  }

    ngDoCheck(changes: {[propKey: string]: SimpleChange}) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    console.log("ngAfterViewChecked",this.questIsActive);
  }

  

  @Output() counterChange = new EventEmitter();

  
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
