import { Routes } from "@angular/router";

import { EmployeesDetailComponent } from './employees-detail.component';
import { employeesDetailGuard } from './employees-detail.guard';

export const EMPLOYEES: Routes = [
  { path: 'detail', redirectTo: '' },
  { path: 'detail/:id', component: EmployeesDetailComponent, canActivate: [employeesDetailGuard] }
];
