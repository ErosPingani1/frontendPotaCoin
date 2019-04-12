import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-dariscattare',
    templateUrl: './dariscattare.page.html',
    styleUrls: ['./dariscattare.page.scss'],
})
export class DariscattarePage implements OnInit {
    vauchers: any = [];
    private dataurl = 'http://localhost:8080/potacoin/potacoinbackend/cliente/mieibuoni';
    public body = '';

    constructor() {

    }

    creaDaJson() {

        // Creazione di lista di vaucher vuota
        console.log('prova');

        // ForEach che salva il valore del json nella lista
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
        //this.creaDaJson();
        this.getAllBuoni();
    }

    async getAllBuoni(){

        if (true /*controllo token*/){
            this.body = '{  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwidGltZSI6MTU1NTA2MjM1NzI4NiwidGlwb2xvZ2lhIjoiYyJ9.HDy8wfT2SnTApI6nUJVpxdA6EcZZ1sdEz1M48UFlbPM" }';
            let risposta = await (await fetch(this.dataurl, {
              headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, method: 'POST', body:this.body})).json();
            console.log(risposta);
    
            if (risposta.errore == null){
              this.vauchers = risposta.mieibuoni;
            
              console.log("Benvenuto " + this.vauchers); 
    
    
            } else if (risposta.errore.id == 2){
              console.log("DB exception, implementare toast!");
            }else if(  risposta.errore.id == 1){
              console.log("Come sei finito qua brutto cane??");
          }

    }

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
