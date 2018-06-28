import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Treatment_Record_Model } from './treatment-record-table.model';
import { TreatmentRecordService } from './treatment-record-table.service';

@Component({
  selector: 'treatment-record-table',
  templateUrl: './treatment-record-table.component.html',
  providers:[TreatmentRecordService],
  styleUrls: ['./treatment-record-table.component.css']
})
export class TreatmentRecordTableComponent implements OnInit {
    viewchild: Boolean;
    treatmentDate: String;
    treatmentDoctor: String;
    treatmentDisease: String;
    treatmentRecords: Treatment_Record_Model[]=[];


  constructor(private fb:FormBuilder,private route:ActivatedRoute) {}

  ngOnInit() {
    this.viewchild=false;

   };

}
