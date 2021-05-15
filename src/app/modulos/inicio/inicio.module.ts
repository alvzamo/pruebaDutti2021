import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [    
    { path: '', component: LoginComponent },  
    { path: 'register', component: RegisterComponent },  

  ];
  
  @NgModule({
    imports: [
      CommonModule,RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule
    ],
      providers: [
  
        
    ],
    declarations: [LoginComponent, RegisterComponent],
    exports: [
      RouterModule,   
    ],
    entryComponents: [
  ]
  })
  export class InicioModule { }
  