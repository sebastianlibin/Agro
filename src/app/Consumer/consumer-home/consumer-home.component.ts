import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.scss']
})
export class ConsumerHomeComponent implements OnInit {

  appUser: any;

  ProductList:any[]=[];
  constructor(
    private service:ServiceService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.appUser$.subscribe((appUser : any) => (this.appUser=appUser));

    this.service.ViewProduct().subscribe((result:any)=>{
      if(result){
        this.ProductList=result;
        console.log(result)
      }
    })
  }


}
