import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from "rxjs";

import { questService } from "./services/quests.service";
import { Quest } from "./models/quest.model";

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styles: []
})

export class QuestDetailComponent implements OnInit {
  questStartForm: FormGroup;
  selectedQuest: Quest;
  

  private questId: number;
  private subscription: Subscription;

  constructor(
    private questService: questService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {   

    this.activatedRoute.params.subscribe(
      params => this.selectedQuest = this.questService.getQuest(+params['id'])      
    );

    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        if(params.hasOwnProperty('id')) {
          this.questId = +params['id']
        }
      }
    )

    this.questStartForm = new FormGroup({ 
      'id': new FormControl(this.questId, Validators.required),
      'time': new FormControl(this.selectedQuest.time, Validators.required),
      'exp': new FormControl(this.selectedQuest.exp, Validators.required),
      'gold': new FormControl(this.selectedQuest.gold, Validators.required)
    });
    

  }

  onSubmit() {
    this.questService.setQuestToActive();
    var test = this.questService.isQuestActive();
    console.log(test);
    this.router.navigate(['']);    
  }

}
