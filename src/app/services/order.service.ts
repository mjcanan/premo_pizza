import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get("http://localhost:8080/order/products");
  }

  public sendPostRequest(data) {
    return this.httpClient.post("http://localhost:8080/order", data);
  }

  public getOrders() {
    return this.httpClient.get("http://localhost:8080/order-list");
  }

  public getOrderById(id) {
    return this.httpClient.get(`http://localhost:8080/order-details/${id}`)
  }

  public getAllEmployeeById(employeeID) {
    return this.httpClient.get(`http://localhost:8080/order/${employeeID}`)
  }
  public getOrdersByPhonenumber(phonenumber){
    return this.httpClient.get(`http://localhost:8081/order-list/${phonenumber}`)
  }

  public updateOrder(id, data) {
    return this.httpClient.put(`http://localhost:8081/order-details/${id}`, data);
  }

  public deleteOrder(id){
    return this.httpClient.delete(`http://localhost:8081/order-list/${id}`)
  }
}
