import { Component, OnInit } from '@angular/core';

import { questService } from "./../services/quests.service";

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styles: [],
  providers: [questService]
})
export class GameOverviewComponent implements OnInit {
  questIsActive = true;  
  myChar: any = [];

  constructor(private questService: questService) { }

  onGetData(){
    this.questService.isQuestActive().subscribe(
        data => this.myChar = data                      
    );
  }

  ngOnInit() {
    this.onGetData();
  }

}
