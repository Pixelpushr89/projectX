import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-navigation',
  templateUrl: './game-navigation.component.html',
  styles: []
})
export class GameNavigationComponent implements OnInit {
  @Input() id: string;
  paramID: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // parameter ist in der url definiert
    this.paramID = this.activatedRoute.snapshot.params['id'];
  }

}
