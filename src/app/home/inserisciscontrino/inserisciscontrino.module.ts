import { CustomHeaderModule } from './../../customheader/customheader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InserisciscontrinoPage } from './inserisciscontrino.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: InserisciscontrinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CustomHeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InserisciscontrinoPage
  ]
})
export class InserisciscontrinoPageModule {}
