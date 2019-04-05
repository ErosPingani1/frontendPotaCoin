import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import { RouterModule, Router, Route } from '@angular/router';
import { Platform } from '@ionic/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  tipo = null;
  url = 'http://localhost:9090/potacoin/potacoinbackend/';
  urlcliente = 'cliente/login';
  urlesercente = 'esercente/login';

  constructor(public platform : Platform) {
}


async doLogin(form : any){
  console.log(form.value.email + " " + form.value.password);
  if('c' == this.tipo){
    this.url = this.url + this.urlcliente;
  } else if ('e' == this.tipo){
    this.url = this.url + this.urlcliente;
  }
    let risposta = await (await fetch(this.url,{
      headers:{'Accept':'application/json', 'Content-Type':'application/json'},method:'POST', body:'{ "username" : "cliente1", "password" : "1234" }'})).json();
    console.log(risposta.token);
  };

  ngOnInit() {
    this.tipo = this.platform.getQueryParam("tipo");
   console.log(this.tipo);
  }

}
