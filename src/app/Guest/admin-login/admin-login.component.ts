import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  LoginForm!:FormGroup
  Username=new FormControl('');
  Password=new FormControl('');
  loginservice: any;
  adminlist:any[]=[]
  constructor(
    private service:ServiceService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      Username: [''],
      Password: ['']
      })
  }

  Login(){
    this.service.Adminlogin(this.Username.value,this.Password.value).subscribe(res=>{
      this.adminlist=res;
      if(this.adminlist.length>0){
        alert("Login sucess")
        this.router.navigate(['/Adminmaster/Adminhome']);
      }
      else{
        alert("Enter a Valid User Name and Password")
        this.router.navigate(['/login']);
      }
    })
  }
}
