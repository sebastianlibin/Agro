import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public FamerList:any[]=[];
  FId: any ;

  constructor(
    private service:ServiceService) { }

  ngOnInit(): void {
    this.FId=localStorage.getItem("Farmersid")

    this.service.FarmerMaster(this.FId).subscribe((result:any)=>{
      if(result){
        this.FamerList[0]=result
        console.log(this.FamerList)
        console.log(result)
      }
    })
  }

}
