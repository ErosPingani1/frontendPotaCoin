import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-dariscattare',
    templateUrl: './dariscattare.page.html',
    styleUrls: ['./dariscattare.page.scss'],
})
export class DariscattarePage implements OnInit {
    vauchers: any = [];
    private urlCeru = 'http://localhost:8080/potacoin/potacoinbackend/cliente/mieibuoni';
    private token;

    constructor() {

    }



    ngOnInit() {
        this.token = localStorage.getItem('token');
        this.getBuoniDaRiscattare();
    }
   

    async getBuoniDaRiscattare(){
            let body = this.createBody();
            let risposta = await (await fetch(this.urlCeru, {
              headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, method: 'POST', body:body})).json();
            console.log(risposta);
    
            if (risposta.errore == null){
              this.vauchers = risposta.mieibuoni;
            
              console.log("Benvenuto " + this.vauchers); 
    
    
            } else if (risposta.errore.id == 2){
              console.log("DB exception, implementare toast!");
            }else if(  risposta.errore.id == 1){
              console.log("Come sei finito qua??");
          }
    }
    private createBody(): string {
        return  JSON.stringify(new Request(this.token));
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

class Request {
    token : string;

    constructor(token: string)
    {
        this.token = token;
    }
}
