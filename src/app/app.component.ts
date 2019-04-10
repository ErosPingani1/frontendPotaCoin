import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            //icon: 'home',
            src: '',
            position: ''
        },
        {
            title: 'I Miei Buoni',
            url: '/mieibuoni',
            //icon: 'gift',
            src: '/assets/img/imieibuoni.svg',
            position: 'header'
        },
        {
            title: 'Catalogo Premi',
            url: '/catalogopremi',
            //icon: ''
            src: '/assets/img/catalogo.svg',
            position: 'header'
        },
        {
            title: 'Elenco Esercenti',
            url: '/elencoesercenti',
            //icon: 'wine',
            src: '/assets/img/mappaesercenti.svg',
            position: 'header'
        },
        {
            title: 'News',
            url: '/notizie',
            //icon: 'notifications',
            src: '/assets/img/news.svg',
            position: 'header'
        },
        {
            title: 'Notifiche',
            url: '/notifiche',
            //icon: '',
            src: '/assets/img/notifiche.svg',
            position: 'header'
        },
        {
            title: 'Profilo',
            url: '/mioprofilo',
            //icon: 'contact'
        },
        {
            title: 'Invita un Amico',
            url: '/invitamico',
            //icon: 'people'
        },
        {
            title: 'Help',
            url: '/help',
            //icon: 'help-circle-outline'
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
