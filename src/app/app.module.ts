import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './modulos/principal/principal.module';
import { InicioModule } from './modulos/inicio/inicio.module';


// Components
import { AppComponent } from './app.component';

// Servicios
import { ShipsService } from './../app/api-rest/api/shipsService.service';


import { PersistenciaService } from './services/persistence/persistencia.service';
import { ShipsAppService } from './services/ships/shipsAppService.service';

//import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    NgxsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InicioModule,
    PrincipalModule,
    

  ],

  providers: [PersistenciaService,ShipsService,ShipsAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
