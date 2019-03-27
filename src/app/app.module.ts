import { CustomHeaderModule } from './customheader/customheader.module';
import { DettaglionewsPage } from './notifiche/dettaglio/dettaglionews/dettaglionews.page';
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
@NgModule({
  declarations: [
    AppComponent,
    DettaglioesercentePage,
    DettaglionewsPage
  ],
  entryComponents: [
    DettaglioesercentePage,
    DettaglionewsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CustomHeaderModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
