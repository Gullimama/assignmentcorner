import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, EmailValidator } from '@angular/forms';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { form } from './form';
import { FormService } from './form.service';
import { Title } from '@angular/platform-browser';
import { CompileShallowModuleMetadata } from '@angular/compiler';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Forms$: form[];

  constructor(private formservice:FormService)  { 

    }
    ngOnInit() {
     // return this.formservice.getForms()
      // .subscribe(data => this.Forms$=data);
    }
       onSubmit(){
        var value=submit_by_id()
        return value     
      }  
            
  
    }
  const Http = new XMLHttpRequest();
  const url='https://backend-dot-assignmentcorner.appspot.com/assignmentcorner/persistfile?fileData=change'
  Http.open("GET",url);    
  Http.send();

Http.onreadystatechange=function(){
  if(this.readyState==4 && this.status==200){
    console.log(Http.responseText) 
  }
}
 function submit_by_id() { 
  let title = document.getElementById("title").value
  let date = document.getElementById("Deadline").value
  let email = document.getElementById("Email").value
  let number = document.getElementById("phone_number").value
  let encode= [title,date,email,number];
   for(var i=0;i<5;i++){
    
    var chanage = btoa(encode[i])  
  }
  console.log(title,date,email,number) 
}