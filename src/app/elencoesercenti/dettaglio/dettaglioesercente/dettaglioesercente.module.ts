import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DettaglioesercentePage } from './dettaglioesercente.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioesercentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettaglioesercentePage],
  exports: [
    DettaglioesercentePage
  ]
})
export class DettaglioesercentePageModule {}
