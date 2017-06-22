import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/products-list.component";
import { ProductService } from "app/products/services/product.service";
import { HeaderComponent } from "app/header/header.component";
import { StoreModule } from "@ngrx/store";
import { cartSlice, productSlice } from "app/store/reducer";
import { ConfirmComponent } from "app/confirm/confirm.component";

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, HeaderComponent, ConfirmComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      { path: 'confirm', component: ConfirmComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' }
    ]),
    FormsModule,
    HttpModule, StoreModule.provideStore({ cartSlice, productSlice })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
