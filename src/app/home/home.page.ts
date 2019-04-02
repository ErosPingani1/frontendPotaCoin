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


  constructor(public navController: NavController) { }

  ngOnInit() {
    this.tryConnection();
  }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

  tryConnection(): any {
    //TODO implementare chiamata al backend
  }
}