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

  //Variabile utile al contenimento della stringa di ricerca
  inputdata = "";

  searcherrormsg = "Nessun esercente trovato!"; 

  msgvisible = false;

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
    //Luca
    let risposta = await (await fetch('http://10.3.129.135:9090/potacoin/potacoinbackend/cliente/esercenti/all')).json();
    //Ceru
    //let risposta = await (await fetch('http://192.168.43.134:9090/potacoin/potacoinbackend/cliente/esercenti/all')).json();
    console.log(risposta);
    //Una volta effettuata la chiamata viene ciclato il json ricevuto e quindi aggiunto ogni esercente alla lista
    for (let i of risposta.esercenti) { 
      //Aggiunta della variabile di visibilità dell'esercente
      i.visible = true;
      this.esercenti.push(i);
      console.log("Esecente aggiunto alla lista!");
    }
    return risposta;
  }

  searchEsercente() {
    var self = this;
    var esercentericercato = (<HTMLInputElement>document.getElementById('searchbar')).value;
    this.inputdata = esercentericercato;
    console.log(this.inputdata);
    this.esercenti.forEach(function (e) {
      var esername = e.nome_attivita;
      if (esername.toLowerCase().includes(self.inputdata.toLowerCase())) {
        console.log("utente trovato!");
        console.log(esername + "corrisponde");
        e.visible = true;
        self.msgvisible = false;
      } else {
        e.visible = false;
        console.log("no user found");
        self.showErrorMsg();
      }
    });
  }

  //Metodo che gestisce il messaggio "nessun esercente trovato" e lo inserisce solo se nessun esercente corrisponde alla ricerca
  showErrorMsg() {
    //Viene creata una variabile che contiene le visibilità di tutti gli esercenti per sapere se questi corrispondono alla ricerca
    var visiblevalue: any = [];
    for (var i = 0; i < this.esercenti.length; i++) {
      visiblevalue.push(this.esercenti[i].visible);
    }
    //Creazione della funzione che serve a verificare insieme ad every() se tutte le visibilità sono false S
    function visibleIsTrue(visibility) {
      return visibility == false;
    }
    if (visiblevalue.every(visibleIsTrue)) {
      this.msgvisible = true;
    }
  }

  //Metodo lanciato al verificarsi dell'evento ionClear, ovvero alla pressione del pulsante di cancellazione della searchbar
  searchClear() {
    this.inputdata = "";
    this.esercenti.forEach(function (e){
      e.visible = true;
    });
    this.msgvisible = false;
  }

  searchCancel(event) {
    if (event.key === "Backspace") {
      console.log("delete");
      this.inputdata = this.inputdata.slice(0, -1);
      this.searchEsercente();
      console.log(this.inputdata + " cane");
    }
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
