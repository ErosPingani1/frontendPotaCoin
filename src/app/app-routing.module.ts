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
    path: 'invitamico', 
    loadChildren: './invitamico/invitamico.module#InvitamicoPageModule' 
  },
  { 
    path: 'help', 
    loadChildren: './help/help.module#HelpPageModule' 
  },
  { 
    path: 'dariscattare', 
    loadChildren: './mieibuoni/tabs/dariscattare/dariscattare.module#DariscattarePageModule' 
  },
  { 
    path: 'utilizzati', 
    loadChildren: './mieibuoni/tabs/utilizzati/utilizzati.module#UtilizzatiPageModule' 
  },
  { 
    path: 'catalogo', 
    loadChildren: './catalogopremi/tabs/catalogo/catalogo.module#CatalogoPageModule' 
  },
  { 
    path: 'wishlist', 
    loadChildren: './catalogopremi/tabs/wishlist/wishlist.module#WishlistPageModule' 
  },
  { 
    path: 'dettaglioesercente', 
    loadChildren: './elencoesercenti/dettaglio/dettaglioesercente/dettaglioesercente.module#DettaglioesercentePageModule' 
  },
  { 
    path: 'dettaglionews', 
    loadChildren: './notifiche/dettaglio/dettaglionews/dettaglionews.module#DettaglionewsPageModule' 
  },
  { 
    path: 'inserisciscontrino', 
    loadChildren: './inserisciscontrino/inserisciscontrino.module#InserisciscontrinoPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
