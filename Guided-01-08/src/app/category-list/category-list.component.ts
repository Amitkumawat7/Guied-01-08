import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../commons/product-category';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: ProductCategory[] = [];
  service: any;
  constructor(private catservice : ProductServiceService) { }

  ngOnInit(): void {
    console.log(this.listOfDepartments())
  }

  listOfDepartments(){
    this.service.getAllCategories().subscribe((data: ProductCategory[]) => {
      console.log(data)
      this.categories = data
    })
  }

}
