import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InserisciscontrinoPage } from './inserisciscontrino.page';

const routes: Routes = [
  {
    path: '',
    component: InserisciscontrinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InserisciscontrinoPage]
})
export class InserisciscontrinoPageModule {}
