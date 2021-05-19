import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { PersistenciaService} from './../../../services/persistence/persistencia.service';
// JSON
import usersList from 'src/assets/json/users.json';
import { User } from 'src/app/api-rest/model/user';

export const USER_KEY = "USER_KEY";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private persistenciaService:PersistenciaService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      lastName: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6),Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: [ '', [Validators.required, Validators.minLength(3)]],

    })
  }

  registerUser() {
    if (this.registerForm.invalid) { return }
    let user:User= this.registerForm.value;
    this.persistenciaService.set( this.registerForm.value.username,user);

    var userLogin = this.registerForm.value;

    usersList.push(userLogin)
    console.log('User Register -->', usersList)
    this.router.navigate(['/principal/ships'])

  }

}
