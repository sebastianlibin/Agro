import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  product_id:any;
  OrderList: any[]=[];
  CId: any;
  constructor(
    private service:ServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) { 
    route.params.subscribe(id => { this.product_id = id['Id'];})
  }

  ngOnInit(): void {
    // this.CId=localStorage.getItem("userid")
    console.log(this.product_id)
    this.service.order(this.product_id).subscribe((result:any)=>{
      if(result){
        this.OrderList[0]=result
        console.log(result)
      }
    })
  }
}
