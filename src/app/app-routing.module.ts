import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
//import { LoginComponent } from './../ ';
//import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [

  {
      path: '',
      children: [
         // { path: '', redirectTo: 'home', pathMatch: 'full' },
         { path: '', loadChildren: () => import('./modulos/inicio/inicio.module').then(m => m.InicioModule) },
         { path: 'principal', loadChildren: () => import(`./modulos/principal/principal.module`).then(m => m.PrincipalModule) },
         { path: '404', redirectTo: '/src/404.html', pathMatch: 'full' },
     ],
  },
  { path: '**', redirectTo: 'home' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
