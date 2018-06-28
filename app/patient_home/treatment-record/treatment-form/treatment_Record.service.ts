import { Injectable, OnInit } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { TreatmentRecordModel } from './treatment_Record.model'

@Injectable()
export class TreatmentRecordservice {
  returnTreatmentData: TreatmentRecordModel[];
  constructor() {

  }

  getTreatmentRecord(): TreatmentRecordModel[] {
    
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