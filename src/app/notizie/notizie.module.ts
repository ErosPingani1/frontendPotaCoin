import { CustomHeaderModule } from './../customheader/customheader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotiziePage } from './notizie.page';

const routes: Routes = [
  {
    path: '',
    component: NotiziePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomHeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NotiziePage
  ]
})
export class NotiziePageModule {}
