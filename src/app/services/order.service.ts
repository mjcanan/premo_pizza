import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private API_SERVER = "";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get("http://localhost:8080/products");
  }
  public sendPostRequest(data) {
    return this.httpClient.post("http://localhost:8080/order", data);
  }
}
