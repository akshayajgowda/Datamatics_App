import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Employees = [];

  constructor() {
   var defaultEmployees = [  {id:1,name:'Akshay',e_code:'123456',project:'Takeda'},
                             {id:2,name:'Girish',e_code:'123456',project:'Takeda'},
                             {id:3,name:'Roshan',e_code:'123456',project:'Takeda'}];

                      if (localStorage.getItem('employeeData')==null){
                          this.Employees=defaultEmployees;
                          localStorage.setItem('employeeData', JSON.stringify(this.Employees));
                      }
                      else{
                         this.Employees = JSON.parse(localStorage.getItem('employeeData'));
                      }
                }

getEmployee() {
      return this.Employees;
  }

  addEmployee(Employee) {
      Employee.id = Math.round(Math.random()*1000);
      console.log(Employee);
      this.Employees.push(Employee+Employee.id);
      localStorage.setItem('customerData', JSON.stringify(this.Employees));
  }

}

