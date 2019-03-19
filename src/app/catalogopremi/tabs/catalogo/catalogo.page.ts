import {Component, OnInit} from '@angular/core';
import {Esercente} from "../../../elencoesercenti/elencoesercenti.page";

import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.page.html',
    styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
    vauchers: any = [];

    constructor(private http: HttpClient) {

    }

    creaDaJson() {

        //Creazione di lista di vaucher vuota
    console.log("prova")

        //ForEach che salva il valore del json nella lista
        fetch('assets/json/PremiMockati.json')
            .then(r => r.json())
            .then(j => {
                console.log(j);
                console.log(j);
                for (let i of j) {
                    this.vauchers.push(i);

                }
            });

        console.log(this.vauchers);

    }




    ngOnInit() {
        this.creaDaJson();
        this.getAllBuoni();
    }


    getAllBuoni() {
        this.http.get('http://localhost:9090/potacoin/potacoinbackend/buoni/all', {
            headers:
                new HttpHeaders(
                    {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'HttpRequest',
                        'MyClientCert': '',        // This is empty
                        'MyToken': ''              // This is empty
                    }
                )
        }).subscribe((response) => {
            console.log(response);
        });

        //Creazione della classe Esercente in modo da poter creare degli oggetti esercenti nel component


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
