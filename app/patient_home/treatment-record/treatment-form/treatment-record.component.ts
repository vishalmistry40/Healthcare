import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentRecordModel } from './treatment_Record.model';
import { TreatmentRecordservice } from './treatment_Record.service';

@Component({
  selector: 'treatment-record',
  templateUrl: './treatment-record.component.html',
  providers: [TreatmentRecordservice],
  styleUrls: ['./treatment-record.component.css']
})
export class TreatmentRecordComponent implements OnInit {
  treatment_Record_Date:FormGroup;
  treatment_from:Date;
  treatment_to:Date;
  viewchild:Boolean;
  treatmentRecords: TreatmentRecordModel[]=[];

  constructor(private fb:FormBuilder, private route:ActivatedRoute) {}

  ngOnInit() {
    this.viewchild=false;
    this.treatment_Record_Date=this.fb.group({
      'treatment_from': new FormControl(null, Validators.required),
      'treatment_to': new FormControl(null, Validators.required),
    });
  }

  valueSubmission(treatmentRecord:TreatmentRecordModel){
    alert("Treatment period submited");
    this.viewchild=true;
  }

}
