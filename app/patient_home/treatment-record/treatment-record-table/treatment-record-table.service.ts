import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Treatment_Record_Model } from './treatment-record-table.model';

@Injectable()
export class TreatmentRecordService {
//   url: string;
  returnTreatmentData: Treatment_Record_Model[];
  constructor(private nativeHttp: Http) {

  }

  getTreatmentRecord(): Treatment_Record_Model[] {
    
    alert("In Service");
    this.returnTreatmentData = [
    {
      "treatmentDate": "04/06/2015", "treatmentDoctor": "Vishal", "treatmentDisease": "Fever"
    }
      ,
    {
      "treatmentDate": "06/07/2016", "treatmentDoctor": "Somnath", "treatmentDisease": "Infection"
    },
    {
      "treatmentDate": "06/02/2017", "treatmentDoctor": "George", "treatmentDisease": "Maleria"
    }
    ]
    return this.returnTreatmentData;

}

  }