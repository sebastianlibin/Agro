import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  statelist: any;
  districtlist:any;
  registrationForm!:FormGroup;
  myDate: any;
  constructor(
    private service:ServiceService,
    private route:Router,
    private fb:FormBuilder,
    private datePipe:DatePipe
  ) { }

  ngOnInit(): void {
    this.myDate=this.datePipe.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')
    this.service.getStateList().subscribe((data: any) => {
      this.statelist = data;
      console.log(data)
      });

      // this.service.getdistrictlist().subscribe((data: any) => {
      //   this.districtlist = data;
      //   console.log(data)
      //   });

    this.registrationForm=this.fb.group({
      Firstname:[''],
      Lastname:[''],
      Address:[''],
      Contact_Number:[''],
      Pincode:[''],
      State:[''],
      Place:[''],
      District:[''],
      UserName:[''],
      Password:[''],
      Registration_Date:this.myDate,
      status:['pending'],
      Payment:['Free']
    })
  }

  onChange(event: any) {
    console.log(this.registrationForm.value)
    this.service.getDistrictById(this.registrationForm.value.State)
      .subscribe(res => {
        console.log(res)
        this.districtlist = res;
      })
  }

  Register(){
    this.service.FarmerRegistration(this.registrationForm.value).then(()=>{
      alert("Registered Succesfully")
      console.log(this.registrationForm.value)
    })
  }
}
