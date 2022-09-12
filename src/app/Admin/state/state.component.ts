import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  StateForm!:FormGroup;
  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.StateForm=this.fb.group({
      State:[''],
      Description:['']
    })
  }

  Add(){
    this.service.Addstate(this.StateForm.value).then(()=>{
      console.log(this.StateForm.value)
      alert("New State is Added")
    })
  }
}
