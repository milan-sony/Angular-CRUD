import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {

  constructor(private sr: ProductserviceService, private r: Router) { }

  datas: Product[] = []

  ngOnInit(): void {

    // view product on start
    this.sr.viewproduct().subscribe((datas1: Product[]) => {
      this.datas = datas1;
    }
    )

  }


  // delete product
  deletedata(pid:number){
    this.sr.deleteproduct(pid).subscribe((product:any)=>{
      this.ngOnInit()
    })
  }

  //update product
  updatedata(pid:number){
    this.r.navigate(['/updateproduct', pid])
  }

}
