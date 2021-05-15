import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { PersistenciaService} from './../../../services/persistence/persistencia.service';
// JSON
import usersList from 'src/assets/json/users.json';
import { User } from 'src/app/api-rest/model/user';

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
      password: [ 'sssa', [Validators.required, Validators.minLength(3)]],

    })
  }

  registerUser() {
    console.log('submit')

    if (this.registerForm.invalid) { return }
    let user:User= this.registerForm.value;
    console.log('User Register -->', user)
    this.persistenciaService.set(this.registerForm.value.username,user);
    // TODO : Falta integrar el servicio para registrar al usuario
    // JSON simulando usuarios
    console.log("get persist",this.persistenciaService.get('user'));

    var userLogin = this.registerForm.value;
    usersList.push(userLogin)
    console.log('User Register -->', usersList)
    this.router.navigate(['/principal/ships'])

  }

}
