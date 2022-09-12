import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
   categoryForm!:FormGroup;
  constructor(
    private service:ServiceService,
    private router:Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.categoryForm=this.fb.group({
      Category:[''],
      Description:['']
    })
  }

  Add(){
    this.service.Addcategory(this.categoryForm.value).then(()=>{
      alert("New Category Added Successfully")
      console.log(this.categoryForm.value)
    })
  }
}
