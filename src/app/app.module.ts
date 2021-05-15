import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//import { PrincipalModule } from './components/principal/principal.module';
import { InicioModule } from './modulos/inicio/inicio.module';
import { FlexLayoutModule } from '@angular/flex-layout';


// Components
import { AppComponent } from './app.component';

// Servicios
import { PersistenciaService } from './services/persistence/persistencia.service';

//import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InicioModule

  ],
  providers: [PersistenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
