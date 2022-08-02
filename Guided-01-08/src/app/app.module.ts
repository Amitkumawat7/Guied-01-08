import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './add-category/category.component';
import { ProductComponent } from './add-product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const route : Routes = [
  {path:'',component:WelcomeComponent} , 
  {path : 'product',component : ProductListComponent } , 
  {path : 'categories' , component : CategoryListComponent},
  {path : 'newproduct' , component : ProductComponent},
  {path : 'newCategory' , component : CategoryComponent},
  {path : 'Home' , component : WelcomeComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent,
    ProductComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductItemComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
