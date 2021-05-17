import { Component, OnInit, Input } from '@angular/core';
import { Ship } from 'src/app/api-rest/model/ship';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataShip: Ship;
  imageError:string='assets/img/errorImg_x3.svg';


  constructor(private sanitizer: DomSanitizer) { 
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


}