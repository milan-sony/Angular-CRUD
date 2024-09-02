import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private root:Router) { }

  addProduct(){
    this.root.navigate(['/addproduct'])
  }

  viewProduct(){
    this.root.navigate(['/viewproduct'])
  }

  removeProduct(){
    this.root.navigate(['/removeproduct'])
  }

  ngOnInit(): void {
  }

}
