import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[] = [];
  private subscription;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.subscription = this.employeeService.getEmployees().subscribe((data:Employee[])=> {
      this.employees =data;
    })
  }

}



