import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { employeesService } from "../services/employees.service";
import { Employees } from "../models/employees.model";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styles: [],
  providers: [employeesService]
})

export class EmployeesListComponent implements OnInit, OnDestroy {

  employeesList : Employees[];
  //selectedEmployees:

  constructor(private employeesService: employeesService) { }

  ngOnInit() {
    this.employeesList = this.employeesService.getEmployeesList();
  }

  ngOnDestroy(){

  }

}
