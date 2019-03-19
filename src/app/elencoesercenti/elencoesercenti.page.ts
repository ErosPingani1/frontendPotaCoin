import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elencoesercenti',
  templateUrl: './elencoesercenti.page.html',
  styleUrls: ['./elencoesercenti.page.scss'],
})
export class ElencoesercentiPage implements OnInit {

  constructor() { }

  creaDaJson() {

     //Creazione di lista di esercenti vuota
     let esercenti: any = [];

    //ForEach che salva il valore del json nella lista
    fetch('assets/json/EsercentiMockati.json')
    .then(r => r.json())
    .then(j => { 
      console.log(j);
      for (let i of j) {
        esercenti.push(i);
      }
    });

    console.log(esercenti);

  }

  ngOnInit() {
      this.creaDaJson();
  }

}

//Creazione della classe Esercente in modo da poter creare degli oggetti esercenti nel component
class Esercente {

  id: number;
  tipo_esercente: String;
  nome_attività: string;
  indirizzo: string;
  coordinate: string;
  p_iva: string;

  constructor(id: number, nome: string, indirizzo: string, coordinate: string, p_iva:string, tipo_esercente:string) {
    this.id = id;
    this.nome_attività = nome;
    this.indirizzo = indirizzo;
    this.coordinate = coordinate;
    this.p_iva = p_iva;
    this.tipo_esercente = tipo_esercente;
  }
}
