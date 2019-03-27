import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { InserisciscontrinoPage } from './inserisciscontrino/inserisciscontrino.page';
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
        [100],
        [0],
        [0],
    ];
    public doughnutChartType: ChartType = 'doughnut';


  constructor(public modalController: ModalController, public navController: NavController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InserisciscontrinoPage
    });
    return await modal.present();
  }

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