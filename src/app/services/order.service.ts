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
    return this.httpClient.get("http://localhost:8080/order/order-list");
  }
}
