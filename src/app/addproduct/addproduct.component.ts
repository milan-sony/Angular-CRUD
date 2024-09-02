import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../product.model';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private fb: FormBuilder, private sr:ProductserviceService, private r:Router) { }

  add_data = this.fb.group({
    'pid': [0],
    'name': [''],
    'price': [0],
    'stock': [0]
  })

  submit = false

  get functionCall() {
    return this.add_data.controls
  }

  addData() {

    let details = this.add_data.value as Product;

    this.sr.insertproduct(details).subscribe((demo:any)=>
    this.r.navigate(['/viewproduct'])
  )
    console.log(this.functionCall)
    this.submit = true
  }



  ngOnInit(): void {
  }

}
