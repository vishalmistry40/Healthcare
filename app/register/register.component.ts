import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient_Reg_Model } from './patient_Reg.model';
import { Doctor_Reg_Model } from './doctor_Reg.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers: [],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
      patient_Reg_Form: FormGroup;
      doctor_Reg_Form: FormGroup;
      pa_Name: string;
      pa_Title: string;
      pa_Age: number;
      pa_Dob: Date;
      pa_Gen: string;
      pa_Height: number;
      pa_Weight: number;
      pa_BloodGroup: string;
      pa_Street: string;
      pa_State: string;
      pa_City: string;
      pa_Zipcode: number;
      pa_Email: string;
      pa_PWD: string;
      pa_Home_Number: number;
      pa_Mobile_Number: number; 

      doc_Name: string;
      doc_Title: string;
      doc_Gen: string;
      doc_Age: number;
      doc_DOB: Date;
      doc_DOA: Date;
      doc_Special: string;
      doc_EXP: number;
      doc_EDU: string;
      doc_Street: string;
      doc_State: string;
      doc_City: string;
      doc_Zipcode: number;
      doc_Email: string;
      doc_PWD: string;
      doc_Home_Number: number;
      doc_Mobile_Number: number;

   constructor(private fb:FormBuilder, private route:ActivatedRoute) {}
    
   ngOnInit() {
    this.patient_Reg_Form=this.fb.group({
      'pa_Name': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]"), Validators.minLength(5), Validators.maxLength(10)])),
      'pa_Title': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]"), Validators.minLength(5), Validators.maxLength(10), ])),
      'pa_Age':  new FormControl('', Validators.compose([Validators.required, Validators.min(15), Validators.max(100)])),
      'pa_DOB': new FormControl('', Validators.required),
      'pa_Gen': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]")])),
      'pa_Height': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}")])),
      'pa_Weight': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}")])),
      'pa_BloodGroup': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]"),Validators.minLength(1), Validators.maxLength(2)])),
      'pa_Street': new FormControl('', Validators.required),
      'pa_State': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]"),Validators.maxLength(10)])),
      'pa_City': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]"),Validators.maxLength(10)])),
      'pa_Zipcode': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}"),Validators.maxLength(10)])),
      'pa_Email': new FormControl('', Validators.compose([Validators.required,Validators.pattern("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")])),
      'pa_PWD': new FormControl('', Validators.required),
      'pa_Home_Number': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}")])),
      'pa_Mobile_Number': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}")])),
    }),
    this.doctor_Reg_Form=this.fb.group({
      'doc_Name': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
      'doc_Title': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
      'doc_Age':  new FormControl('', Validators.compose([Validators.required, Validators.min(15), Validators.max(100)])),
      'doc_DOB': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
      'doc_Gen': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]")])),
      'doc_DOA': new FormControl('', Validators.required),
      'doc_Special': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]")])),
      'doc_EXP': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}"),Validators.max(30)])),
      'doc_EDU': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]")])),
      'doc_Street': new FormControl('', Validators.required),
      'doc_State': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]"),Validators.maxLength(10)])),
      'doc_City': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[A-Za-z -]+$]"),Validators.maxLength(10)])),
      'doc_Zipcode': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}"),Validators.maxLength(10)])),
      'doc_Email': new FormControl('', Validators.compose([Validators.required,Validators.pattern("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")])),
      'doc_PWD': new FormControl('', Validators.required),
      'doc_Home_Number': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}")])),
      'doc_Mobile_Number': new FormControl('', Validators.compose([Validators.required,Validators.pattern("[0-9]{0-10}")])),
    });
  }
  valueSubmission(register:Patient_Reg_Model){
    alert('form submission happened: '+register.pa_Name);
  }

}

