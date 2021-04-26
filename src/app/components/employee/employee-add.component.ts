import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee( );
  
  
  // constructor(private employeeService: EmployeeService
  //   ) { }
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.postEmployee(this.employee).subscribe(data =>{
      console.log(data);
    
    },
    error => console.log(error));
    
  }
  
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/employee-list']);
  }
}
