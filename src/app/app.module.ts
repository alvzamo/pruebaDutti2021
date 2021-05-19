import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './modulos/principal/principal.module';
import { InicioModule } from './modulos/inicio/inicio.module';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { ShipReducer } from './store/ships.reducer'

// Components
import { AppComponent } from './app.component';

// Servicios
import { ShipsService } from './../app/api-rest/api/shipsService.service';
import { SharedService } from './../app/core/share/shared.service';
import {ShipsEffects  } from './store/effects'
import { PersistenciaService } from './services/persistence/persistencia.service';
import { ShipsAppService } from './services/ships/shipsAppService.service';

//import { PrincipalComponent } from './components/principal/principal.component';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InicioModule,
    PrincipalModule,
    NgReduxModule,
    StoreModule.forRoot({
      shipping: ShipReducer
    }),
    EffectsModule.forRoot([ShipsEffects]),

  ],

  providers: [PersistenciaService,ShipsService,ShipsAppService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(

  ) {


  }}
