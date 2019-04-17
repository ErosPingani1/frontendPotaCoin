import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  urlCeru = "http://localhost:8080/potacoin/potacoinbackend/cliente/buonipreferiti";
  buonipreferiti : Vaucher[] = [];
  token : string;
  constructor() { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this. getBuoniPreferiti();   
}

async getBuoniPreferiti() {
  let body = this.getBody();
    let risposta = await (await fetch(this.urlCeru, {
        headers: { 'Accept':'application/json', 'Content-Type': 'application/json'}, method: 'POST',body:body})).json();
      console.log(risposta);
      this.buonipreferiti = risposta.buoni;
}
private getBody() {
  return JSON.stringify((new Request(this.token)));
}

}



export class Vaucher {

  id_buono: number;
  tipo_buono: string;
  scadenza_assoluta: string;
  scadenza: number;
  esercente: any;

  constructor(id_buono: number, tipo_buono: string, scadenza_assoluta: string, scadenza: number, esercente: any) {
      this.id_buono = id_buono;
      this.tipo_buono = tipo_buono;
      this.scadenza_assoluta = scadenza_assoluta;
      this.scadenza = scadenza;
      this.esercente = esercente;
  }


}
class Request{
  token : string;

  constructor (token : string){
    this.token = token;
  }
}