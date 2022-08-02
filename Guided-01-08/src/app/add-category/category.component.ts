import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductCategory } from 'src/app/commons/product-category';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: ProductCategory = {
    categoryId: 0,
    categoryname: ''
 
  }
  submitted = false;

  constructor(private catService: ProductServiceService) { }
  ngOnInit(): void {
    
  }

  saveCategory(): void {
    const data = {
      categoryId: this.category.categoryId,
      categoryname: this.category.categoryname
     
    

    };
    this.catService.createCategory(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    }

    newCategory(): void {
      this.submitted = false,
      this.category = {
        categoryId: 0,
        categoryname: ''
      }
    }

}
