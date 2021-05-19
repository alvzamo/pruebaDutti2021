

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ShipsService } from './../../api-rest/api/shipsService.service'
import { ResponseListShip } from 'src/app/api-rest/model/responseListShip';
import { SharedService } from 'src/app/core/share/shared.service';

@Injectable()
export class ShipsAppService {

  constructor(public shipsService: ShipsService, public http: HttpClient, public sharedService: SharedService) { }


  getShips(): Observable<any> {
    return new Observable((observer) => {
      this.shipsService.getShips(this.sharedService.getCurrentPage()).subscribe(
        (respuesta: ResponseListShip) => {
          this.sharedService.setTableConfig(respuesta.count, respuesta.next, respuesta.previous)
          respuesta.results[0].img = new Blob;
          observer.next(respuesta);
          observer.complete();
          //error => this.erroresService.handleError(error)
        }
      );
    });

  }

  getImageShips(shipId: string): Observable<Blob> {

    return new Observable((observer) => {
      this.shipsService.getImageShip(shipId).subscribe(
        (respuesta: Blob) => {
          observer.next(respuesta);
          observer.complete();
        },
        error => { return error }// this.erroresService.handleError(error)

      );
    });
  }
}
