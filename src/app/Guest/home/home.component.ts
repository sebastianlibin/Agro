import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appUser!: firebase.User;
  ProductList:any []=[];
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

  Login(){
    this.service.ConsumerLogin()
  }
}
