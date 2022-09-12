import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm!:FormGroup
  FarmerList:any[]=[]
  enddate:any[]=[]
  Username=new FormControl('')
  Password=new FormControl('')
  myDate: any;

  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder,
    private datePipe:DatePipe
  ) { }

  ngOnInit(): void {
    this.myDate=this.datePipe.transform(new Date().toLocaleDateString(),'yyyy-MM-dd');
    this.LoginForm=this.fb.group({
      Username:[''],
      Password:[''],
    })

    let days = Math.floor((this.myDate - this.FarmerList[0].Registration_Date) /(1000 * 3600 * 24));
    console.log("newdays=")
    console.log((this.myDate - this.FarmerList[0].Registration_Date) /(1000 * 3600 * 24))
    console.log("34567fgh",days)
  }

  Login(){
    console.log(this.LoginForm.value)
    this.service.FarmerLogin(this.Username.value,this.Password.value).subscribe(res =>{
     
      localStorage.setItem('Farmersid',res[0].Collection_FarmerId);
      this.FarmerList[0]=res[0];
      console.log(this.FarmerList)
      this.enddate=this.FarmerList.map(t=>t.Registration_Date);
      console.log(this.enddate)
      localStorage.setItem('Farmername',this.FarmerList.map(t=>t.Firstname).toString())
      console.log("Registration_Date");
      console.log(this.FarmerList[0].Registration_Date)
      console.log("Today=")
      console.log(this.myDate);
       let days = Math.floor((this.myDate - this.FarmerList[0].Registration_Date) /(1000 * 3600 * 24));

       console.log("days=")
       console.log((this.myDate - this.FarmerList[0].Registration_Date) /(1000 * 3600 * 24))
       console.log(days)
       //return days;
      if(this.FarmerList.length>0 && (this.FarmerList[0].Payment=="Free" || this.FarmerList[0].Registration_Date=="Free")){
        alert("Login Successfull")
        // this.router.navigate(['/Farmermaster'])
      }
      else{
        alert("Login Failed or not eligible for login")
        this.router.navigate(['/Home'])
      }
    })
  }

}
