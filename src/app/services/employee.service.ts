import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    return this.httpClient.get("http://localhost:8081/employees");
  }

  public postEmployee(data){
    return this.httpClient.post("http://localhost:8081/employee", data);
  }
}


