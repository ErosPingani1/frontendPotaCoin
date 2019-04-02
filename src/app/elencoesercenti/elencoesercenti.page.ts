import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DettaglioesercentePage } from './dettaglio/dettaglioesercente/dettaglioesercente.page';

@Component({
  selector: 'app-elencoesercenti',
  templateUrl: './elencoesercenti.page.html',
  styleUrls: ['./elencoesercenti.page.scss'],
})
export class ElencoesercentiPage implements OnInit {

  //Creazione di lista di esercenti vuota
  esercenti: any = [];

  constructor(public modalController: ModalController) {}

  //Scrittura del metodo per la creazione del modal con assegnamento di un determinato component e dei props che permettono di passare l'esercente 
  async presentModal(esercentePassato: Esercente) {
    let esercente = new Esercente(esercentePassato.id, esercentePassato.nome_attivita, esercentePassato.indirizzo, esercentePassato.coordinate, esercentePassato.p_iva, esercentePassato.tipo_esercente) 
    const modal = await this.modalController.create({
      component: DettaglioesercentePage,
      componentProps: { 'esercente': esercente },
      cssClass: 'customModal'
    });
    return await modal.present();
  }

  //Scrittura del metodo utile alla chiamata asincrona fetch tramite la quale richiamare l'elenco di esercenti
  async fetchEsercenti() {
    let risposta = await (await fetch('http://192.168.43.134:9090/potacoin/potacoinbackend/cliente/esercenti/all')).json();
    console.log(risposta);
    //Una volta effettuata la chiamata viene ciclato il json ricevuto e quindi aggiunto ogni esercente alla lista
    for (let i of risposta.esercenti) {
      console.log(i);
      this.esercenti.push(i);
      console.log("Esecente aggiunto alla lista!")
    }
    return risposta;
  }

  ngOnInit() {
      this.fetchEsercenti();
  }

}

//Creazione della classe Esercente in modo da poter creare degli oggetti esercenti nel component
export class Esercente {

  id: number;
  tipo_esercente: string;
  nome_attivita: string;
  indirizzo: string;
  coordinate: string;
  p_iva: string;

  constructor(id: number, nome: string, indirizzo: string, coordinate: string, p_iva:string, tipo_esercente:string) {
    this.id = id;
    this.nome_attivita = nome;
    this.indirizzo = indirizzo;
    this.coordinate = coordinate;
    this.p_iva = p_iva;
    this.tipo_esercente = tipo_esercente;
  }
    
}
