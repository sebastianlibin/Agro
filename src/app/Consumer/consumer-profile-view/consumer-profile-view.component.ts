import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-consumer-profile-view',
  templateUrl: './consumer-profile-view.component.html',
  styleUrls: ['./consumer-profile-view.component.scss']
})
export class ConsumerProfileViewComponent implements OnInit {

  ConsumerList:any[]=[];
  CId: any ;
  ConsumerprofileForm!:FormGroup
  public loading=true;
  public choosenFile: any;
  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CId=localStorage.getItem("userid")

    // this.service.ConumerView(this.CId).subscribe((result:any)=>{
    //   if(result){
    //     this.ConsumerList=result
    //     console.log(result)
    //   }
    // })

    this.ConsumerprofileForm=this.fb.group({
      Name:[''],
      dob:[''],
      Gender:[''],
      Contact_Number:[''],
      Email:[''],
      State:[''],
      District:[''],
      Place:[''],
      Pincode:[''],
      fileUrl:[''],
    })

    if(this.CId){
      console.log(this.CId)
      this.service.ConumerView(this.CId)
      .subscribe((result:any)=>{
        console.log(result)
        if(result){
          this.ConsumerprofileForm.patchValue(result)
        }
      })
    }
  }

  uploadFile(){
  }
  save(){
    this.loading=true;
    this.service.upload(this.choosenFile).then((url)=>{
      if(url){
      this.ConsumerprofileForm.patchValue({
        fileUrl:url
      })
      this.service.ConsumerUpdate(this.CId,this.ConsumerprofileForm.value).then(()=>{
        this.loading=false;
        alert("Updated")
        this.router.navigate(['/Master/Profile']);
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
