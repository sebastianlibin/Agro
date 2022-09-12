import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  DistrictForm!:FormGroup
  StateList :any[]=[]

  constructor(
    private fb:FormBuilder,
    private service:ServiceService,
    private router:Router
  ) { }

  
  ngOnInit(): void {

    this.service.getStateList().subscribe((data:any)=>{
      this.StateList = data;
      console.log(data)
      });

    this.DistrictForm=this.fb.group({
      District:[''],
      Description:[''],
      State:['']
    })
  }

  Add(){
    this.service.Adddistrict(this.DistrictForm.value).then(()=>{
      alert("New District is Added")
      console.log(this.DistrictForm.value)
    })
  }
}
