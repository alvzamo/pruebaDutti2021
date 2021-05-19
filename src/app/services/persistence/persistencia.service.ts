import { Injectable } from '@angular/core';
import { Console } from 'console';
import { User } from 'src/app/api-rest/model/user';

@Injectable()
export class PersistenciaService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error al guardar localStorage', e);
    }
  }

  get(key: string, pass:string) {
    console.log("name",key);
    try {
       if(localStorage.getItem(key)){
         let user:User= JSON.parse(localStorage.getItem(key));
         console.log("user",user);
         console.log("pass1",pass);
         console.log("pass2",user.password);

        if(user.password==pass){
          return user;
        }else{
          return false;
        }
          
    }else{return false}
  
      
   
    } catch (e) {
      console.error('Error al obtener datos de localStorage', e);
      return null;
    }
  }
}