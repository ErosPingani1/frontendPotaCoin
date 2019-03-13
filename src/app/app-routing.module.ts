import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'mieibuoni', 
    loadChildren: './mieibuoni/mieibuoni.module#MieibuoniPageModule' 
  },
  { 
    path: 'catalogopremi', 
    loadChildren: './catalogopremi/catalogopremi.module#CatalogopremiPageModule' 
  },
  { 
    path: 'notifiche', 
    loadChildren: './notifiche/notifiche.module#NotifichePageModule' 
  },
  { 
    path: 'elencoesercenti', 
    loadChildren: './elencoesercenti/elencoesercenti.module#ElencoesercentiPageModule' 
  },
  { 
    path: 'mieiviaggi', 
    loadChildren: './mieiviaggi/mieiviaggi.module#MieiviaggiPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
