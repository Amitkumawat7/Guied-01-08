import { Component, OnInit } from '@angular/core';
import { Product } from '../commons/product';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    productid: 0,
    productname: "",
    desciption: "",
    unit_price: 0,
    imageurl: "",
    unitsinstock: 0,
    price: 0,
    datecreated: new Date(0, 0, 0),
    lastUpdated: new Date(0, 0, 0),
    categoryId: 0
  }
  submitted = false;
  constructor(private proService: ProductServiceService) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    const data = {
      productid: this.product.productid,
      productname: this.product.productname,
      desciption: this.product.desciption,
      unitprice: this.product.unit_price,
      imageurl: this.product.imageurl,
      unitsinstock: this.product.unitsinstock,
      price: this.product.price,
      datecreated: this.product.datecreated,
      lastUpdated: this.product.lastUpdated,
      categoryId: this.product.categoryId

    };
    this.proService.createProduct(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false,
      this.product = {
        productid: 0,
        productname: "",
        desciption: "",
        unit_price: 0,
        imageurl: "",
        unitsinstock: 0,
        price: 0,
        datecreated: new Date(0, 0, 0),
        lastUpdated: new Date(0, 0, 0),
        categoryId: 0
      }
  }

}
