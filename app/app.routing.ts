import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { PatientHomeComponent } from '../app/patient_home/patient-home/patient-home.component';

export const router : ModuleWithProviders=RouterModule.forRoot([
    {path:'',component:SigninComponent},
    {path:'register',component:RegisterComponent},
    {path:'patient-home',component:PatientHomeComponent},
    
])