import { DettaglioesercentePage } from './elencoesercenti/dettaglio/dettaglioesercente/dettaglioesercente.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { InserisciscontrinoPage } from './home/inserisciscontrino/inserisciscontrino.page';
@NgModule({
  declarations: [
    AppComponent,
    DettaglioesercentePage,
    InserisciscontrinoPage
  ],
  entryComponents: [
    DettaglioesercentePage,
    InserisciscontrinoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
