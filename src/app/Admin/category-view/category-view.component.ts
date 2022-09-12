import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

   categoryList : any[]=[];
  constructor(
    public service:ServiceService,
    public route:Router
  ) { }

  ngOnInit(): void {
    this.service.categoryview().subscribe((result:any)=>{
      if(result){
        this.categoryList=result
        console.log(result)
      }
    })
  }

}
