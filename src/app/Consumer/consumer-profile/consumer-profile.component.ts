import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.component.html',
  styleUrls: ['./consumer-profile.component.scss']
})
export class ConsumerProfileComponent implements OnInit {

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
      CId:localStorage.getItem("userid"),
      fileUrl:[''],
    })
  }

  uploadFile(){
  }
  save(){
    console.log(this.ConsumerprofileForm.value)
    this.loading=true;
    this.service.upload(this.ConsumerprofileForm).then((url)=>{
      if(url){
        this.ConsumerprofileForm.patchValue({
          fileUrl:url
        })
        this.service.ConsumerProfile(this.ConsumerprofileForm.value).then(()=>{
          this.loading=false
          alert("Profile Saved")
          this.router.navigate(['Master'])
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
