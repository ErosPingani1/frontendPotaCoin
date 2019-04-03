import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrazioneutentePage } from './registrazioneutente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrazioneutentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrazioneutentePage]
})
export class RegistrazioneutentePageModule {}
