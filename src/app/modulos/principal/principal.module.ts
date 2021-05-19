import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';

// Components
import { ShipsComponent } from './ships/ships.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';
import { PrincipalComponent } from './principal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {StoreModule} from "@ngrx/store";



@NgModule({
  declarations: [
    PrincipalComponent,
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    PrincipalComponentsRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FlexLayoutModule,
  ]

})
export class PrincipalModule { }