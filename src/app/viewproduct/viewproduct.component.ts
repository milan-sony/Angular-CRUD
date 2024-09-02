import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private sr: ProductserviceService, private r: Router) { }

  datas: Product[] = []

  ngOnInit(): void {

    this.sr.viewproduct().subscribe((datas1: Product[]) => {
      this.datas = datas1;
    }
    )
  }

}
