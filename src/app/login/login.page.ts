import { Component, OnInit} from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  tipo = null;
  url = 'http://localhost:8080/potacoin/potacoinbackend/';
  urlcliente = 'cliente/login';
  urlesercente = 'esercente/login';

  constructor(private platform: Platform, private router : Router, public toastController : ToastController) {
  }


  async doLogin(form: any) {
    let body = this.createJson(form);
    console.log(body);
    if ('c' == this.tipo) {
      this.url = this.url + this.urlcliente;
    } else if ('e' == this.tipo) {
      this.url = this.url + this.urlesercente;
    }
    let risposta = await (await fetch(this.url, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, method: 'POST', body:body})).json();
    console.log(risposta);
    if(!risposta.token){
      console.log("hai sbagliato");
      this.presentToast()
    }else{
      this.router.navigate(['/home']);
    }
  };

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Errore nella login',
      duration: 2000,
        showCloseButton: true,
        position: 'top',
        color: 'danger',
        cssClass:'',
        translucent:true,
        closeButtonText: 'Chiudi'
      });
    toast.present();
  }

  ngOnInit() {
    this.tipo = this.platform.getQueryParam("tipo");
    console.log(this.tipo);
  }
  createJson(form: any) {
    return '{ "username" : "'+form.value.username+'", "password" : "'+form.value.password+'" }';
  }

}
