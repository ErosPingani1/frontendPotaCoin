import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'I Miei Buoni',
      url: '/mieibuoni',
      icon: 'gift'
    },
    {
      title: 'Catalogo Premi',
      url: '/catalogopremi',
      icon: 'briefcase'
    },
    {
      title: 'Notifiche',
      url: '/notifiche',
      icon: 'notifications'
    },
    {
      title: 'Elenco Esercenti',
      url: '/elencoesercenti',
      icon: 'wine'
    },
    {
      title: 'I miei Viaggi',
      url: '/mieiviaggi',
      icon: 'train'
    },
    {
      title: 'Invita un Amico',
      url: '/invitamico',
      icon: 'people'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
