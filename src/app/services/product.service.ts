import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get("http://localhost:8081/products");
  }
}
