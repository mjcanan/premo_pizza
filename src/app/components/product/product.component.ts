import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.sendGetRequest().subscribe((data:Product[]) => {
      this.products = data;
    });
  }

}
