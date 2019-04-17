import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserisciscontrino',
  templateUrl: './inserisciscontrino.page.html',
  styleUrls: ['./inserisciscontrino.page.scss'],
})
export class InserisciscontrinoPage implements OnInit {
  urlCeru = "http://10.3.133.123:8080/potacoin/potacoinbackend/cliente/riscuotiscontrino";
  token :string;

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }

  constructor() { }

  async inviaScontrino(form : any) {
    console.log(form.value.codicescontrino);

    let body = this.createJson(form);
    console.log(body);
  
    let risposta = await (await fetch(this.urlCeru, {
      headers: { 'Accept':'application/json', 'Content-Type': 'application/json'}, method: 'POST', body:body})).json();
    console.log(risposta);
    if(!risposta.token){
      console.log("hai sbagliato");
     
    }else{

    }
  }
  createJson(form: any) {
    return JSON.stringify(new RequestScontrino(this.token, new Scontrino(form.value.codice_scontrino)));
  };

};


class RequestScontrino{
  token : string;
  scontrino : Scontrino;

  constructor (token : string, scontrino : Scontrino){
    this.token = token;
    this.scontrino = scontrino;
  }

};
class Scontrino {
  codice_scontrino : string;

  constructor (codice_scontrino : string){
    this.codice_scontrino = codice_scontrino;

  }

}



