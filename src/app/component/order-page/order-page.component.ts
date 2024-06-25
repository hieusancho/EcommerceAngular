import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  public totalamount :number = 0;
  constructor(private api:ApiService){}
  ngOnInit(): void {

     this.totalamount = this.api.totalprice();

  }

}
