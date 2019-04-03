import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full'
  },
  {
    path: 'landingpage',
    loadChildren: './landingpage/landingpage.module#LandingpagePageModule'
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
  },
=======
    {
        path: '',
        redirectTo: 'landingpage',
        pathMatch: 'full'
    },
    {
        path: 'landingpage',
        loadChildren: './landingpage/landingpage.module#LandingpagePageModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'registrazioneutente',
        loadChildren: './registrazioneutente/registrazioneutente.module#RegistrazioneutentePageModule'
    },
    {
        path: 'registrazioneesercente',
        loadChildren: './registrazioneesercente/registrazioneesercente.module#RegistrazioneesercentePageModule'
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
    },

>>>>>>> e27f5bc2933d9bb47bc91fe96c678bd2f0f63937

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
