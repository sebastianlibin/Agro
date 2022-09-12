// import { DatePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent implements OnInit {
 
  messageForm!:FormGroup;
  myDate :any;
  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.myDate=this.datePipe.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')
    this.messageForm=this.fb.group({
      Message:[''],
      Description:[''],
      Notify_date:this.myDate
    })
  }

    Send(){
      this.service.Messagesent(this.messageForm.value).then(()=>{
        alert("Notification sented");
        console.log(this.messageForm.value)
      })
    }
}
