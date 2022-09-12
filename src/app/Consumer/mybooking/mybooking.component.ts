import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.scss']
})
export class MybookingComponent implements OnInit {

  product_id:any;
  BookedList: any;
  CId: any;
  constructor(
    private service:ServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) { 
  }

  ngOnInit(): void {
    this.CId=localStorage.getItem("userid")

    this.service.bookeddata(this.CId).then((result:any)=>{
      if(result){
        this.BookedList=result
        console.log(result)
      }
    })
  }

  cancel(BookingId:any){

   if(confirm("Do you want to Cancel order")){

    this.service.cancelbooking(BookingId).then((result:any)=>{
      this.router.navigate(['Mybooking'])
    })
   }
  }
}
