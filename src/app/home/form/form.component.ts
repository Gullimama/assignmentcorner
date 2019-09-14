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

  constructor(private formservice: FormService) {

  }
  ngOnInit() {
    // return this.formservice.getForms()
    // .subscribe(data => this.Forms$=data);
  }
  onSubmit() {
    var value = submit_by_id()
    const Http = new XMLHttpRequest();
    var url = 'https://backend-dot-assignmentcorner.appspot.com/assignmentcorner/persistfile?fileData='
    url += value
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(Http.responseText)
      }
    }
  }


}

function submit_by_id() {
  let title = (document.getElementById("title") as HTMLInputElement).value
  let project = (document.getElementById("Project_type") as HTMLInputElement).value
  let date = (document.getElementById("Deadline") as HTMLInputElement).value
  let email = (document.getElementById("Email") as HTMLInputElement).value
  let number = (document.getElementById("phone_number") as HTMLInputElement).value
  var finalString = title + ", " + project + ", " + date + ", " + email + ", " + number + "\n\r" 

    
  finalString = btoa(finalString);
  
  return finalString;
}
