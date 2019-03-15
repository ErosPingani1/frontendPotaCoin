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
     let esercenti: any[];

    //ForEach che salva il valore del json nella lista
    fetch('assets/json/EsercentiMockati.json')
    .then(r => r.json())
    .then(j => { /*console.log(j);*/
      console.log(j);
      JSON.parse(j);
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

  id_esercente: number;
  nome_attività: string;
  indirizzo: string;
  coordinate: string;
  partitaiva: string;

  constructor(id: number, nome: string, indirizzo: string, coordinate: string, partitaiva:string) {
    this.id_esercente = id;
    this.nome_attività = nome;
    this.indirizzo = indirizzo;
    this.coordinate = coordinate;
    this.partitaiva = partitaiva;
  
  }

}
