import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';

Employees=[{Serial:1,name:'Akshay',e_code:'717427',project:'takeda'},
           {Serial:2,name:'Roshan',e_code:'727427',project:'takeda'},
           {Serial:3,name:'Girish',e_code:'737427',project:'USBank'}];

Employee = {Serial:4,name:'',e_code:'',project:''};

addEmployee(Employee) {
  console.log(Employee.Serial);
  console.log(Employee.name);
  console.log(Employee.e_code);
  console.log(Employee.project);
  Employee = {Serial:4,name:'',e_code:'',project:''};
  this.Employee.Serial=Employee.Serial;
  this.Employee.name=Employee.name;
  this.Employee.e_code=Employee.e_code;
  this.Employee.project=Employee.project;
  this.Employees.push(Employee);

}


}
