import { Routes, RouterModule } from "@angular/router";
import { EmployeesListComponent } from './employees/employees-list.component';
import { NodePizzaOverviewComponent } from './game-navigation/node-pizza-overview/node-pizza-overview.component';
import { HomeComponent } from './home.component';
import { EMPLOYEES } from './employees/employees.routes';
import { QuestDetailComponent } from './quest-detail.component';
import { QUESTROUTES } from './quest.routes';

const  APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, children: QUESTROUTES },  
  { path: 'employees-list', component: EmployeesListComponent, children: EMPLOYEES },
  { path: 'pizza-list', component: NodePizzaOverviewComponent },
  { path: '**', redirectTo: '/' },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
