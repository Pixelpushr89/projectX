import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from "rxjs";
import { HttpService } from "./services/http.service";

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
  @Input() questIsActiveTest: Quest;
  @Output() close = new EventEmitter();
  

  private questId: number;
  private subscription: Subscription;

  constructor(
    private questService: questService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
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

    console.log("qd", this.questIsActiveTest);

    this.questStartForm = new FormGroup({ 
      'id': new FormControl(this.questId, Validators.required),
      'time': new FormControl(this.selectedQuest.time, Validators.required),
      'exp': new FormControl(this.selectedQuest.exp, Validators.required),
      'gold': new FormControl(this.selectedQuest.gold, Validators.required)
    });
    

  }

  onSubmit() {
    this.httpService.sendCharData({name: 'test', gold: '1000', exp: 0, questIsActive: true})
      .subscribe(
        data => console.log(data),
        error => console.error(error)
    );  
    
    this.close.emit();
    this.router.navigate(['']);    
  }

  @Output() counterChange = new EventEmitter();

  @Input()
  get counter() {
    return this.questService.counterValue;
  }

  set counter(val){
    this.questService.counterValue = val;
    this.counterChange.emit(this.questService.counterValue);
  }

  homeIncrement(): void {   
    this.counter = this.questService.increment(this.questService.counterValue);
  }

  homeDecrement() {
    this.questService.decrement();
  }

  
}
