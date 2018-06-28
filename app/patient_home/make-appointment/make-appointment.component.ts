import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MakeAppointmentModel } from './make_Appointment.model';
import { AppointmentService } from './make_Appointment.service';

@Component({
  selector: 'make-appointment',
  templateUrl: './make-appointment.component.html',
  providers:[AppointmentService],
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  make_Appointment:FormGroup;
  appointment_Date:Date;
  appointment_Doctor:string;
  appointment_Disease:string;


  constructor(private fb:FormBuilder, private route:ActivatedRoute) { }

  ngOnInit() {
    this.make_Appointment=this.fb.group({
      'appointment_Date':new FormControl('', Validators.required),
      'appointment_Doctor':new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[a-zA-Z ]*$]")])),
      'appointment_Disease':new FormControl('', Validators.compose([Validators.required, Validators.pattern("[^[a-zA-Z ]*$]")])),
    });
  }

  valueSubmission(appointment:MakeAppointmentModel){
  alert('Your appointment is fix for: '+appointment.appointment_Date)};

}
