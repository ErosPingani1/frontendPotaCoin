import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { SHA256 } from 'crypto-js';
@Component({
  selector: 'app-registrazioneutente',
  templateUrl: './registrazioneutente.page.html',
  styleUrls: ['./registrazioneutente.page.scss'],
})
export class RegistrazioneutentePage implements OnInit {
  url = 'http://localhost:8080/potacoin/potacoinbackend/cliente/signup';

  constructor(private platform: Platform, private router: Router) { }

  async doSignup(form: any) {
    let body = this.createJson(form);
    console.log(body);
    let risposta = await (await fetch(this.url, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, method: 'POST', body: body
    })).json();
    console.log(risposta);
    if (risposta.errore) {
      console.log("hai sbagliato");
    } else {
      console.log(SHA256(form.value.password).toString());
      this.router.navigate(['/login'], { queryParams: { tipo: 'c' }});
    }
  }

  createJson(form: any) {
    let credenziali = new Credenziali(form.value.username, form.value.password, form.value.email);
    let cliente = new Cliente(form.value.cf, form.value.citta, form.value.cognome, form.value.nome);
    let registrazione = new Registrazione(credenziali, cliente);
    return JSON.stringify(registrazione);
  }
  ngOnInit() {
  }

};
class Registrazione {
  credenziali: Credenziali;
  cliente: Cliente;

  constructor(credenziali : Credenziali, cliente : Cliente){
    this.cliente = cliente;
    this.credenziali = credenziali;
  }

}
class Credenziali {
  username: string;
  password: string;
  email: string;

  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = SHA256(password).toString();
    this.email = email;
  }

}
class Cliente {
  cf: string;
  citta: string;
  cognome: string;
  nome: string;

  constructor(cf : string, citta : string, cognome : string, nome : string) {
    this.cf = cf;
    this.citta = citta;
    this.cognome = cognome;
    this.nome = nome;
  }

}
