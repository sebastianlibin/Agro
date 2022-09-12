import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-consumer-chat',
  templateUrl: './consumer-chat.component.html',
  styleUrls: ['./consumer-chat.component.scss']
})
export class ConsumerChatComponent implements OnInit {

  ChatForm!:FormGroup
  myDate: any;
  FId:any
  senderList:any[]=[]
  CId: any;
  ChatList: any[]=[];
  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder,
    private datePipe:DatePipe,
    private route:ActivatedRoute
  ) { 

    route.params.subscribe(Id => { this.FId = Id['Id'];})
  }

  ngOnInit(): void {
    this.myDate=this.datePipe.transform(new Date().toLocaleString(),'d-M-yyyy, h:mm a')
    this.ChatForm=this.fb.group({
      chat:[''],
      ChatDate:this.myDate,
      SenderId:localStorage.getItem("userid"),
      RecevierId:this.FId
    })

    // this.CId=localStorage.getItem("userid")
    console.log(this.CId)
    this.service.sendersList(this.ChatForm.value.SenderId,this.ChatForm.value.RecevierId).subscribe((result:any)=>{
      if(result){
        this.senderList=result
      }
    })
    console.log(this.CId)
    this.service.Viewsenderchat(this.ChatForm.value.SenderId,this.ChatForm.value.RecevierId).subscribe((ans:any)=>{
      this.ChatList=ans.concat(this.senderList) 

      console.log(this.ChatList);
    })


// this.service.Viewchat(this.ChatForm.value.SenderId,this.ChatForm.value.RecevierId).subscribe((ans:any)=>{
//       this.ChatList=ans 
//     })




    // console.log("Farmer",this.FId)
    // console.log("Consumer",this.CId)
  }

  chat(){
    this.service.Addchat(this.ChatForm.value).then(()=>{
    // console.log(this.chatform.value)
    this.router.navigate(['ConsumerChat'])
  })
}
}
