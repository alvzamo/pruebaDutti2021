import { Component, OnInit, Input } from '@angular/core';
import { Ship } from 'src/app/api-rest/model/ship';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataDetailShip: Ship;
  @Input() imageDetailShip: Blob;

  imageError: string = 'assets/img/errorImg_x3.svg';


  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

  }

  createImageFromBlob(img) {
    console.log("img", img);
    if (img) {
      let image = img;
      let urlCreator = window.URL;
      return this.sanitizer.bypassSecurityTrustUrl(
        urlCreator.createObjectURL(image));
    } else {
      return this.imageError;
    }


  }


}