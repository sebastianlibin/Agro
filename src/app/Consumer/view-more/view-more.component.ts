import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent implements OnInit {

  product_id:any;
  productlist:any[]=[];
  FarmerList:any[]=[];
  viewmoreform!:FormGroup;
  CId: any;
  myDate: any;
  constructor(
    private service:ServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private datePipe:DatePipe
) { 
    route.params.subscribe(id => { this.product_id = id['Id'];})
  }

  ngOnInit(): void {

    this.myDate=this.datePipe.transform(new Date().toLocaleString(),'d-M-yyyy')
    this.viewmoreform = this.fb.group({
      FId:[''],
      CId: localStorage.getItem("userid"),
      Book_Date:this.myDate,
      PId:this.product_id,
      status:['Booked']
    })
    console.log(this.viewmoreform.value)
    this.service.ProductMoreDetails(this.product_id)
      .subscribe((result:any)=>{
        console.log(result)
       this.productlist[0]=result;
        this.viewmoreform.patchValue(result);
        console.log(this.productlist[0].FId);

      this.service.FarmerDetails(this.productlist[0].FId).subscribe((ans:any)=>{
        this.FarmerList[0]=ans;
        console.log(this.FarmerList)
      })
      })
  }

  book(){
    this.service.mybooking(this.viewmoreform.value).then(()=>{
      alert("Booked successfully")
    })
  }

}
