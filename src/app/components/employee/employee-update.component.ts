import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/interfaces/employee';


@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
 id: number;
 employee: Employee = new Employee();
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
 }
 updateEmployee() {
  this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.gotoList();
    }, error => console.log(error));
}

onSubmit() {
  this.updateEmployee();    
}

gotoList() {
  this.router.navigate(['/employees']);
}
}
