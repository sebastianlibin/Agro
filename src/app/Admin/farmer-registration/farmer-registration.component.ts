import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.scss']
})
export class FarmerRegistrationComponent implements OnInit {

  private fieldArray: Array<any> = [];

  FarmersList:any[]=[];
  value :any[]=[];
  constructor(
    private service:ServiceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.FarmersView().subscribe((result:any)=>{
      if(result){
        this.FarmersList=result;
        this.value=this.FarmersList;
        console.log(result);
      }
    })
  }
  
  accept( farmer_id:any){
   
      this.service.Acceptfarmer(farmer_id).then((result:any)=>{
      
        alert("Accepted")
        this.router.navigate(['/Adminmaster/Farmer-Reg'])
      })
     
    
  }

  reject(farmer_id:any){
    this.service.Rejectfarmer(farmer_id).then((result:any)=>{
      
      alert("Rejected")
      this.router.navigate(['/Adminmaster/Farmer-Reg'])
    })
  }
}
