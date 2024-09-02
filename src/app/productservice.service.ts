import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }


  baseApiUrl:string='http://localhost:5255'

  // service to insert the product
  insertproduct(prds: Product){
    // console.log(prds)
    return this.http.post<Product>(this.baseApiUrl+'/api/Products', prds)
  }

  // service to view the product
  viewproduct(){
    return this.http.get<any>(this.baseApiUrl+'/api/Products')
  }

  // service to delete the product
  deleteproduct(pid:number){
    return this.http.delete<any>(this.baseApiUrl+'/api/Products/'+pid)
  }
  // service to update the product
  updateproduct(pid:number){
    return this.http.get<any>(this.baseApiUrl+'/api/Products/'+pid)
  }


  updatedata1(data: Product, pid:number){
    return this.http.put<any>(this.baseApiUrl+'/api/Products/'+pid, data);
  }

}


