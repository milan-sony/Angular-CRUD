import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateproductComponent } from './updateproduct/updateproduct.component'
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    RemoveproductComponent,
    ViewproductComponent,
    MenubarComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
