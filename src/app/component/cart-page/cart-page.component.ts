import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import { FormGroup,FormControl,Validator, Validators  } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  showproduct:any =[]
  public totalamount :number = 0;
  public addressform =false;
  myform:FormGroup|any;

  constructor(private api:ApiService){}
  ngOnInit(): void {
      this.api.products().subscribe(res =>{
        this.showproduct = res;
        this.totalamount =this.api.totalprice();
      })

      //form
      this.myform = new FormGroup({
        email:new FormControl('', Validators.required),
        name:new FormControl('', Validators.required),
        mobile:new FormControl('', Validators.required),
        address:new FormControl('', Validators.required)
      })
  }

  deleteitem(item:product){
    this.api.removecartitem(item);

  }

  empty(){
    this.api.removeallitems();
    
  }

  cancel(){
    this.addressform =false;
    this.myform.reset();
  }

  order(){
    this.myform.value;
    this.myform.reset();
  }
}
