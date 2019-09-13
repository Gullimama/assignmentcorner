import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router'; 

import { Subject } from 'rxjs/Subject';
import { form } from './form';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
//apiUrl = 'https://backend-dot-assignmentcorner.appspot.com/assignmentcorner/persistfile?fileData=Zm9ybS52YWx1ZQ=='

  constructor(private _http:HttpClient ) {}
  //getForms(){
    //return this._http.get<form[]>(this.apiUrl);
  //} 
}
   

