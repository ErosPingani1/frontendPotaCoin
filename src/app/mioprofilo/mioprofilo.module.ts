import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MioprofiloPage } from './mioprofilo.page';

const routes: Routes = [
  {
    path: '',
    component: MioprofiloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MioprofiloPage]
})
export class MioprofiloPageModule {}
