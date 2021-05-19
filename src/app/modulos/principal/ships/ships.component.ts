import { Component, OnInit } from '@angular/core';
import { ResponseListShip } from 'src/app/api-rest/model/responseListShip';
import { Ship } from 'src/app/api-rest/model/ship';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from "rxjs/internal/Observable";
import { createStore } from 'redux'
import * as fromRoot from '../../../store/ships.reducer';

import { select, Store } from "@ngrx/store";
//import {IAppState} from "../../../store/ships.reducer"

import { SharedService } from 'src/app/core/share/shared.service';

import { ShipsAppService } from './../../../services/ships/shipsAppService.service';
import { NgRedux } from '@angular-redux/store';
import { ImageList } from 'src/app/api-rest/model/imageList';
import { KeyValue } from 'src/app/api-rest/model/keyValue';
import * as fromActions from '../../../store/actions';
import { AppState } from '../../../store/app.state';



@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  dataShipAux: Array<Ship>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>


  responseListShip$: Observable<ResponseListShip>;
  dataShip: Observable<Ship[]>;
  images: Array<KeyValue> = [];
  imageError: string = 'assets/img/errorImg_x3.svg';

  config: any;
  shipId: string = '';
  url: string = '';
  hayNaves: boolean = false;
 // dataShip: Ship[];
  //responseListShip: ResponseListShip;
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';
  public dataList: any = [];
  imageshow: any;

  constructor(private shipsService: ShipsAppService, private sanitizer: DomSanitizer, private sharedService:SharedService,private store: Store<AppState>) {
   // store.pipe(select('shop')).subscribe(data => console.log("DATA"));
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 10
    };

/*     let action = { type: fromActions.LoadItems , payload: {page:1} }
    console.log(action)
    this.ngRedux.dispatch(action)

    this.ngRedux.dispatch({
      type: fromActions.LoadItems, 
      
    })  */
    /* this.dataShip$.subscribe(ships => {
      this.config.itemsPerPage =ships.length;

      ships.forEach(ship => {

        let pathImgArray: Array<string> = ship.url.split('/');
        let shipId = pathImgArray[pathImgArray.length - 2];
        const urlImage = `${shipId}.jpg`;
        this.getStarshipImages(ship.name, urlImage);
        this.setPaginator();
      });

  })
    this.sharedService.setCurrentPage(this.config.currentPage); */
   // this.getListShips();

  }

  ngOnInit(): void {
    
/*     this.store.select(store => store.shipping).subscribe(
             val =>{
               console.log("VAL",val);
              this.dataShip=val;
             });
     */
this.getListShips();       /*  console.log("shared", this.sharedService.getTableConfig());
    this.dataShip$ = this.store.select(getAllOrders);
    this.dataShip$.subscribe(ships => {
      ships.forEach(ship => {
        let pathImgArray: Array<string> = ship.url.split('/');
        let shipId = pathImgArray[pathImgArray.length - 2];
        const urlImage = `${shipId}.jpg`;
        this.getStarshipImages(ship.name, urlImage);
        this.setPaginator();

      });

    }); */
  }

  createImageFromBlob(ship: Ship) {
    let imageFound: KeyValue = this.images.find(imageShip => imageShip.key === ship.name);
    if (imageFound) {
      let urlCreator = window.URL;
      return this.sanitizer.bypassSecurityTrustUrl(
        urlCreator.createObjectURL(imageFound.value));
    } else {
      return this.imageError;

    } 
   }

   getShip(ship){
     console.log("SHIPSSS",ship);
   }
  pageChanged(event) {
    console.log("event", event);
    this.config.currentPage = event;
    this.sharedService.setCurrentPage(event)
    this.getListShips();


  }



  openDetails(details) {
    this.dataShip = details;

    $("#exampleModal").modal('show');

  }

  getListShips() {
    this.store.dispatch(new fromActions.LoadShipsAction());
    this.dataShip=this.store.select(store => store.shipping.results);
   
    this.store.select(store => store.shipping.results).subscribe(value=>{
     if(value.length>0){
      this.dataShipAux=value;
      this.dataShipAux.forEach(element => {
        let pathImgArray: Array<string> = element.url.split('/');
        let shipId = pathImgArray[pathImgArray.length - 2];
        const urlImage = `${shipId}.jpg`;
        this.getStarshipImages(element.name, urlImage)
      });
      
     }
     
     console.log("AUX",value);
    });

    this.store.select(store => store.shipping.count).subscribe(value=>{
      this.config.totalItems=value;
    });
   //   this.getStarshipImages()

    this.setPaginator();
    
  }

  setPaginator(){
    this.config.currentPage =this.sharedService.getCurrentPage();
    this.config.totalItems =this.sharedService.getTableConfig().count;
  
  }
  getStarshipImages(name, shipUrl) {
    console.log("shipo", shipUrl);
    this.shipsService.getImageShips(shipUrl).subscribe((imgShip: Blob) => {
      console.log("imgShip", imgShip);
      let imageObjectList: KeyValue = <KeyValue>{};
      imageObjectList.key = name;
      imageObjectList.value = imgShip;

      this.images.push(imageObjectList)

    }, error => console.log("error", error)
    );
    console.log("GLOBAL", this.images);
  }

}

