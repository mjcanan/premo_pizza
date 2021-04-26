import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../interfaces/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/employee';

  constructor(private httpClient: HttpClient) { }

  getEmployees():Observable<any> {
    return this.httpClient.get("http://localhost:8080/employee");
  }

  postEmployee(employee: Object): Observable<Object>{
    
    return this.httpClient.post("http://localhost:8080/employeeadd", employee);
  }


  getEmployeeById(id: number): Observable<Employee>{
   return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
  }
  
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
}



