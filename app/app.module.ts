import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md' ;
import { AppComponent } from './app.component';
import { router } from './app.routing';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { PatientHomeComponent } from './patient_home/patient-home/patient-home.component';
import { TreatmentRecordComponent } from './patient_home/treatment-record/treatment-form/treatment-record.component';
import { MakeAppointmentComponent } from './patient_home/make-appointment/make-appointment.component';
import { PatientProfileComponent } from './patient_home/patient-profile/patient-profile.component';
import { TreatmentRecordTableComponent } from './patient_home/treatment-record/treatment-record-table/treatment-record-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    PatientHomeComponent,
    TreatmentRecordComponent,
    MakeAppointmentComponent,
    PatientProfileComponent,
    TreatmentRecordTableComponent,
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    router,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
