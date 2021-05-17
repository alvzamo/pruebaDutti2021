

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { ShipsService} from './../../api-rest/api/shipsService.service'
import { ResponseListShip } from 'src/app/api-rest/model/responseListShip';

@Injectable()
export class ShipsAppService{

  constructor( public shipsService:ShipsService,public http: HttpClient ) { }


getShips(page:number):  Observable<ResponseListShip>{
 
    return new Observable((observer) => {
    this.shipsService.getShips(page).subscribe(
      (respuesta:ResponseListShip) => {
        observer.next(respuesta);
        observer.complete();
      },
      
        //error => this.erroresService.handleError(error)
      
    );
  }); 
}

getImageShips(shipId:string):  Observable<Blob>{
 
    return new Observable((observer) => {
    this.shipsService.getImageShip(shipId).subscribe(
      (respuesta:Blob) => {
        observer.next(respuesta);
        observer.complete();
      },
      
                //error => this.erroresService.handleError(error)

    );
  }); 
}
}
