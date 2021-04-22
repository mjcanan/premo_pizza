import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/customers';
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomerById(phonenumber): Observable<any> {
    return this.http.get(`${this.baseUrl}/${phonenumber}`);
  }
  getCustomerByPhonenumber(phonenumber): Observable<any> {
    return this.http.get(`${this.baseUrl}/${phonenumber}`);
  }

  createCustomer(data): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}`);
  }

/* getCustomerByPhonenumber(phonenumber): Observable<any> {
    return this.http.get(`${this.baseUrl}/${phonenumber}`);
  }*/
}



