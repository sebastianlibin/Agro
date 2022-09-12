import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-district-view',
  templateUrl: './district-view.component.html',
  styleUrls: ['./district-view.component.scss']
})
export class DistrictViewComponent implements OnInit {

  districtList :any[]=[];
  constructor(
    private service:ServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.districtview().subscribe((result:any)=>{
      if(result){
        this.districtList=result;
        console.log(result)
      }
    })
  }

}
