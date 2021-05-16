import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
 

  constructor() { 
  }
  
  ngOnInit(): void {
      
  }


}