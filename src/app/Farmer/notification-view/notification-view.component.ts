import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.scss']
})
export class NotificationViewComponent implements OnInit {

  NotifyList: any[]=[]
  constructor(
    private service:ServiceService
  ) { }

  ngOnInit(): void {
    this.service.Notification().subscribe((result:any)=>{
      if(result){
        this.NotifyList=result
        console.log(result)
      }
    })
  }

}
