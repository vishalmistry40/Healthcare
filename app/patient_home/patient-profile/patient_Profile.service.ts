import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/Rx';
import { PatientProfileModel } from './patient_Profile.model';

@Injectable()
export class PatientProfileService {
  url: string;
  returnData: PatientProfileModel[];
  constructor(private nativeHttp: Http) {

  }

  getUserDetails(patient:PatientProfileModel):Observable<PatientProfileModel[]> {
   
    this.url="";
     return this.nativeHttp.post(this.url,patient,).map(res => res.json());
       

  }

}