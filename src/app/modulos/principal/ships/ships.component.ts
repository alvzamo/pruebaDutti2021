import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
declare var $: any;

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';
  public dataList: any = [];

  constructor( private shipsService: ShipsService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.dataList.length
    };
  }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results)
    })
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1)
    const urlImage = `${this.shipId}.jpg`
    return urlImage !== "";
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}

