import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router, Route } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  tipo = null;

  constructor(public platform : Platform) {
    
}

  ngOnInit() {
    this.tipo = this.platform.getQueryParam("tipo");
   console.log(this.tipo);
  }

}
