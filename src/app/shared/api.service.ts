import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { product } from '../component/product-view/productmodal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist :any=[];
  public productlist = new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get<product[]>("https://dummyjson.com/products");//api
  }

  getproductbyid(id:string){
    return this.http.get("https://dummyjson.com/products/"+id);
  }

  //them vao gio hang
  addtocart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);

  }

  products(){
    return this.productlist.asObservable();
  }

  removecartitem(data:product){
    this.cartitemlist.map((a:product, index:product) =>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1);
      }
    })

    this.productlist.next(this.cartitemlist);
  }

  //total
  totalprice(){
    let total = 0;
    this.cartitemlist.map((a:any)=>{
      total += a.price;
    }) 
    return total;
  }

  removeallitems(){
    this.cartitemlist = [];
    this.productlist.next(this.cartitemlist);
  }

  
}
