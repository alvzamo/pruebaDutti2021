import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { ResponseListShip } from 'src/app/api-rest/model/responseListShip';
import { Ship } from 'src/app/api-rest/model/ship';
import { DomSanitizer} from '@angular/platform-browser';

import { ShipsAppService } from './../../../services/ships/shipsAppService.service';
declare var $: any;

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  imageError:string='assets/img/errorImg_x3.svg';
  config: any;
  shipId: string = '';
  url: string = '';
  hayNaves:boolean=false;
  dataShip:Ship;
  responseListShip: ResponseListShip;
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';
  public dataList: any = [];
  imageshow:any;
  constructor( private shipsService: ShipsAppService,private sanitizer: DomSanitizer) {
    this.config = {
      itemsPerPage:9,
      currentPage: 1,
      totalItems: this.dataList.length
    };
    this.getListShips(this.config.currentPage);
  }

  ngOnInit(): void {
   
  }



 
 createImageFromBlob(ship) {
   if(ship.img){
   let image=ship.img;
  let urlCreator = window.URL;
  return this.sanitizer.bypassSecurityTrustUrl(
      urlCreator.createObjectURL(image));
  }else{
    return this.imageError;
}
 

}

  pageChanged(event){
    console.log("event",event);
    this.config.currentPage = event;
   
      this.getListShips(event);

    
  }



  openDetails(details) {
    this.dataShip = details;

    $("#exampleModal").modal('show');
  
  }

  getListShips(page){
    this.shipsService.getShips(page).subscribe((ships) => {
      this.responseListShip=ships;
      this.dataList = ships;
      this.config.totalItems=ships.count;
      //this.getStarshipId(ships.results);
      ships.results.forEach((ship, index) => { 
        console.log("SHIP", index);
        let pathImgArray:Array<string>=ship.url.split('/');
        let shipId = pathImgArray[pathImgArray.length-2];
        this.getStarshipId(index,shipId);
        });
        this.hayNaves=true;

      console.log('SHIPS -->', this.dataList.results)
    })
  }


  getStarshipId(index:number,shipId:string) {
    const urlImage = `${shipId}.jpg`;
      this.shipsService.getImageShips(urlImage).subscribe((imgShip) => {
       this.dataList.results[index].img = imgShip;

      },error=> console.log("error",error)
      ); 
   
  }

}

