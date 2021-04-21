import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[] = [];
  private subscription;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.employeeService.getEmployees().subscribe((data:Employee[])=> {
      this.employees = data;
    })
  }
  //private getEmployees(){
    //this.subscription = this.employeeService.getEmployees().subscribe((data:Employee[])=> {
      //this.employees = data;
  //}
updateEmployee(id: number){
  this.router.navigate(['employee-update', id])
}
}



