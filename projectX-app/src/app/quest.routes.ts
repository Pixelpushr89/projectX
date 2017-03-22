import { Routes } from "@angular/router";

import { QuestDetailComponent } from './quest-detail.component';

export const QUESTROUTES: Routes = [
  { path: 'detail', redirectTo: '' },
  { path: 'questDetail/:id', component: QuestDetailComponent }
];


