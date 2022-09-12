import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
   
  productList:any[]=[];
  FId: any ;
  constructor(
    private service:ServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.FId=localStorage.getItem("Farmersid")

    this.service.Productview(this.FId).subscribe((result:any)=>{
      if(result){
        this.productList=result
        console.log(result)
        
      }
    })
  }

}
