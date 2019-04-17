import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DettagliobuonoPage } from './dettagliobuono.page';


const routes: Routes = [
  {
    path: '',
    component: DettagliobuonoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettagliobuonoPage],
  exports: [
    DettagliobuonoPage
  ]
})
export class DettagliobuonoPageModule {}
