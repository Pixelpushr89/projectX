import { Employees } from "../models/employees.model";

export class employeesService {
  private employeesList : Employees[] = [
    new Employees('Koch', 'Beschreibung 1', 'Skill 1'),
    new Employees('Kellner', 'Beschreibung 2', 'Skill 2'),
  ];

  getEmployeesList() {
    return this.employeesList;
  }

  getEmployees(id: number){
    return this.employeesList[id];
  }
}
