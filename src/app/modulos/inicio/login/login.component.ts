import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/share/shared.service';
import { PersistenciaService } from 'src/app/services/persistence/persistencia.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router, private persistenciaService:PersistenciaService, private sharedService:SharedService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(3)]]
    })
  }
  loginUser() {
    if (this.loginForm.invalid) { return }

   let respuesta= this.persistenciaService.get(this.loginForm.value.username, this.loginForm.value.password);
    if(respuesta){   
      this.sharedService.setUser(respuesta)
      this.router.navigate(['/principal/ships'])
    }else{
      this.unregistered = true;

    }
  }
      
}

