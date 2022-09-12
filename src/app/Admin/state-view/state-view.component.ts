import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.scss']
})
export class StateViewComponent implements OnInit {

   stateList : any[]=[]
  constructor(
    private service:ServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.Stateview().subscribe((result:any)=>{
      if(result){
        this.stateList=result;
        console.log(result);
      }
    })
  }

}
