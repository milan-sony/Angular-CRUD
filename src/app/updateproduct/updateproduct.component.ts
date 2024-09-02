import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../product.model';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private fb: FormBuilder, private ar:ActivatedRoute, private sr:ProductserviceService, private r:Router) { }

  update_data = this.fb.group({
    'pid': [0],
    'name': [''],
    'price': [0],
    'stock': [0]
  })

  updateData(){
    let data1 = this.update_data.value as Product;
    this.sr.updatedata1(data1, this.p1).subscribe((Product:any)=>{
      this.r.navigate(['/removeproduct'])
    })
  }

  // a variable to store the id
  p1:any
  ngOnInit(): void {

    // access the value from the url (ActivatedRoute is used)
    this.p1=this.ar.snapshot.paramMap.get('pid')

    if(this.p1){
      this.sr.updateproduct(this.p1).subscribe({next:(response)=>{
        // patchValue is used to split the value and display it on form
        this.update_data.patchValue(response)
      }})
    }

  }


}
