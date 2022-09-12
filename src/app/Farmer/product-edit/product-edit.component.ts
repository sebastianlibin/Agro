import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  EditProductForm!:FormGroup;
  product_id: any;
  public loading=true;
  public choosenFile: any;
  myDate: any;
  datePipe: any;
  CategoryList:any[]=[];
  constructor(
    private service:ServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) { 
    {route.params.subscribe(id => { this.product_id = id['id'];}) }
  }

  ngOnInit(): void {

    this.service.getCategoryList().subscribe((data:any)=>{
      this.CategoryList = data;
      console.log(data)
      });

    console.log(this.product_id)
    // this.myDate=this.datePipe.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')
    this.EditProductForm=this.fb.group({
      Product_Name:[''],
      Category:[''],
      Quantity:[''],
      Rate:[''],
      Description:[''],
      Status:['Pending'],
      fileUrl:[''],
      Current_Date:[''],
      FId:localStorage.getItem("Farmersid")
    })

    if(this.product_id){
      console.log(this.product_id)
      this.service.ProductDetails(this.product_id)
      .subscribe((result:any)=>{
        if(result){
          this.EditProductForm.patchValue(result)
        }
      })
    }
  }

  uploadFile(){
  }
  AddProduct(){
    this.loading=true;
    this.service.upload(this.choosenFile).then((url)=>{
      if(url){
      this.EditProductForm.patchValue({
        fileUrl:url
      })
      this.service.ProductUpdate(this.product_id,this.EditProductForm.value).then(()=>{
        this.loading=false;
        alert("Updated")
        this.router.navigate(['/Farmermaster/Product-View']);
      });
    }else{
      alert("error");
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
