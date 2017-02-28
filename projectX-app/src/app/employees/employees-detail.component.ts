import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employees } from "../models/employees.model";
import { employeesService } from "../services/employees.service";

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styles: []
})

export class EmployeesDetailComponent implements OnInit {
  selectedEmployees: Employees;

  constructor(
    private employeesService: employeesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.selectedEmployees = this.employeesService.getEmployees(+params['id'])
    );
  }

}
