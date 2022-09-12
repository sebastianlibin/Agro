import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-chat-front',
  templateUrl: './chat-front.component.html',
  styleUrls: ['./chat-front.component.scss']
})
export class ChatFrontComponent implements OnInit {

  chatform!:FormGroup
  myDate: any;
  FId:any
  senderList:any[]=[]
  list:any[]=[]
  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder,
    private datePipe:DatePipe,
    private route:ActivatedRoute
  ) { 

    // route.params.subscribe(Id => { this.FId = Id['Id'];})
  }

  ngOnInit(): void {
      this.chatform=this.fb.group({
        Senderid:['']
      })
    this.FId=localStorage.getItem("Farmersid")
    console.log(this.FId)
    this.service.sendersList1(this.FId).then((result:any)=>{
      if(result){
        console.log("Front")
        this.senderList=result
        console.log(this.senderList)
      }
    })

    // console.log("Id===",this.chatform)
    this.service.sender(this.senderList[0].SenderId).subscribe((result:any)=>{
      if(result){
        this.list=result
        console.log("Senders",result) 
      }
    })

    // this.service.sender(this.FId)
    //   .subscribe((result:any)=>{
    //     console.log("Sender")
    //     console.log(result)
    //   //  this.list[0]=result;
    //     this.chatform.patchValue(result);
    //     // console.log(this.list[0].FId);
    //   })
  }
}
