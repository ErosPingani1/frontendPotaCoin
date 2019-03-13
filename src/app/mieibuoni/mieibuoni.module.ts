import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MieibuoniPage } from './mieibuoni.page';

const routes: Routes = [
  {
    path: 'mieibuoni',
    component: MieibuoniPage,
    children: [
      {
        path: 'dariscattare',
        loadChildren: './mieibuoni/tabs/dariscattare/dariscattare.module#DariscattarePageModule'
      },
      {
        path: 'utilizzati',
        loadChildren: './mieibuoni/tabs/utilizzati/utilizzati.module#UtilizzatiPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'mieibuoni/dariscattare',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MieibuoniPage
  ]
})
export class MieibuoniPageModule {}
