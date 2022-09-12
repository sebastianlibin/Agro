import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  appUser!: firebase.User;

  ProductList:any[]=[];  
  constructor(
    private service:ServiceService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.appUser$.subscribe((appUser : any) => (this.appUser=appUser));

  }
  logout(){
    this.service.logout();
  }
}
