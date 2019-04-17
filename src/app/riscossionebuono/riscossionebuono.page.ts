import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-riscossionebuono',
  templateUrl: './riscossionebuono.page.html',
  styleUrls: ['./riscossionebuono.page.scss'],
})
export class RiscossionebuonoPage implements OnInit {

  urlCeru = "http://10.3.133.123:8080/potacoin/potacoinbackend/esercente/riscossioneBuono";
  token :string;

  constructor(public alertController: AlertController) { }

  async riscuotiBuono(form: any) {

    let body = this.createJson(form);
    console.log(body);

    let risposta = await (await fetch(this.urlCeru, {
      headers: { 'Accept':'application/json', 'Content-Type': 'application/json'}, method: 'POST', body:body 
    })).json();
    if (risposta.errore) {
      let message = risposta.errore.msg
      console.log(message)
      this.presentAlert(message);
    } else {
      let message = 'Buono riscosso con successo!'
      console.log(message);
      this.presentAlert(message);
    }

  }

  createJson(form: any) {
    return JSON.stringify(new BuonoRiscosso(this.token, new DatiBuono(form.value.idbuono, form.value.idcliente)));
  }

  async presentAlert(message: string) {
    let msg = message;
    const alert = await this.alertController.create({
      header: 'Riscossione Buono',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }  

};

class BuonoRiscosso {
  token: string;
  buonoassegnato: DatiBuono;

  constructor(token: string, datibuono: DatiBuono) {
    this.token = token;
    this.buonoassegnato = datibuono;
  }
}

class DatiBuono {
  ID_buono_assegnato: number;
  ID_cliente: number;

  constructor(idbuonoassegnato: number, idcliente: number) {
    this.ID_buono_assegnato = idbuonoassegnato;
    this.ID_cliente = idcliente;
  }
}
