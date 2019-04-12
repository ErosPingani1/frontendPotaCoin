import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
    // Doughnut
    public doughnutChartLabels: Label[] = [];
    public doughnutChartData: MultiDataSet = [
        [0,0,57,0,0,0,43],
        [0],
        [0],
    ];
    public doughnutChartType: ChartType = 'doughnut';
    private dataurl = 'http://localhost:8080/potacoin/potacoinbackend/cliente/dati';
    public body = '';
    private nomeutente;
    private punti: any;

  constructor(public navController: NavController) { }

  ngOnInit() {
    this.getDataUser();
  }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    async getDataUser() {
      if (true /*controllo token*/){
        this.body = '{ "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwidGltZSI6MTU1NTA2MjM1NzI4NiwidGlwb2xvZ2lhIjoiYyJ9.HDy8wfT2SnTApI6nUJVpxdA6EcZZ1sdEz1M48UFlbPM"}';
        let risposta = await (await fetch(this.dataurl, {
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, method: 'POST', body:this.body})).json();
        console.log(risposta);

        if (risposta.errore == null){
          this.nomeutente = risposta.cliente.nome;
          this.punti = risposta.cliente.punti;
          console.log("Benvenuto " + this.nomeutente);

        } else if (risposta.errore.id == 2){
          console.log("DB exception, implementare toast!");
        }else if(  risposta.errore.id == 1){
          console.log("Come sei finito qua brutto cane??");
      };
      }
  }
}
