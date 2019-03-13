import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElencoesercentiPage } from './elencoesercenti.page';

const routes: Routes = [
  {
    path: '',
    component: ElencoesercentiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElencoesercentiPage]
})
export class ElencoesercentiPageModule {}
