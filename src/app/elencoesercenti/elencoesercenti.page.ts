import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elencoesercenti',
  templateUrl: './elencoesercenti.page.html',
  styleUrls: ['./elencoesercenti.page.scss'],
})
export class ElencoesercentiPage implements OnInit {

  //Creazione di lista di esercenti vuota
  esercenti: any = [];

  constructor() {
   }

  creaDaJson() {

    //ForEach che salva il valore del json nella lista
    fetch('assets/json/EsercentiMockati.json')
    .then(r => r.json())
    .then(j => { 
      for (let i of j) {
        this.esercenti.push(i);
      }
    });

    console.log(this.esercenti);

  }

  ngOnInit() {
      this.creaDaJson();
  }

}

//Creazione della classe Esercente in modo da poter creare degli oggetti esercenti nel component
export class Esercente {

  id: number;
  tipo_esercente: String;
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
