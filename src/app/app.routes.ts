import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];
