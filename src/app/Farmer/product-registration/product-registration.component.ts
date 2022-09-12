import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  CategoryList:any[]=[]
  ProductForm!:FormGroup
  public loading=true;
  public choosenFile: any;
  myDate: any;

  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.myDate=this.datePipe.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')
    this.ProductForm=this.fb.group({
      Product_Name:[''],
      Category:[''],
      Quantity:[''],
      Rate:[''],
      Description:[''],
      Status:['Pending'],
      fileUrl:[''],
      Current_Date:this.myDate,
      FId:localStorage.getItem("Farmersid")
    })

    this.service.getCategoryList().subscribe((data:any)=>{
      this.CategoryList = data;
      console.log(data)
      });
  }

  uploadFile(){
  }
  AddProduct(){
    console.log(this.ProductForm.value)
    this.loading=true;
    this.service.upload(this.choosenFile).then((url)=>{
      if(url){
        this.ProductForm.patchValue({
          fileUrl:url
        })
        this.service.Addproduct(this.ProductForm.value).then(()=>{
          this.loading=false
          alert("Product Added")
          this.router.navigate(['/'])
        })
      }
      else{
        alert("Error")
      }
    })
    .catch((err)=>{
      this.loading=false;
      console.log(err)
    })

  }
  handleFileInput(event:any){
    console.log(event.target.files[0])
    this.choosenFile=event.target.files[0]
  }
}
