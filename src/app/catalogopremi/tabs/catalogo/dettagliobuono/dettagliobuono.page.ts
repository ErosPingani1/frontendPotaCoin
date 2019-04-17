import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dettagliobuono',
  templateUrl: 'dettagliobuono.page.html',
  styleUrls: ['dettagliobuono.page.scss'],
})
export class DettagliobuonoPage implements OnInit {
  @Input() buonotobuy : any;
  url = "http://localhost:8080/potacoin/potacoinbackend/cliente/acquistaBuono/";
  token : string;

  constructor(private modalCtrl: ModalController) {
  }

  closemodal() {
    this.modalCtrl.dismiss();
  }

  async acquistaBuono (){
    console.log(this.url);
    let body = this.createBody();
    let risposta = await (await fetch(this.url, {
      headers: { 'Accept':'application/json', 'Content-Type': 'application/json'}, method: 'POST', body:body})).json();
    console.log(risposta);
  }
  createBody() {
    return JSON.stringify(new Request(this.token));
  }

  ngOnInit() {
    this.token = localStorage.getItem("token");
    console.log(this.buonotobuy)
    this.url = this.url + this.buonotobuy.ID_buono;
   
  }

};

class Request {
  token : string;

  constructor(token: string)
  {
      this.token = token;
  }
}
