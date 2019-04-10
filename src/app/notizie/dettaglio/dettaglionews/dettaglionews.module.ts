import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DettaglionewsPage } from './dettaglionews.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglionewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettaglionewsPage]
})
export class DettaglionewsPageModule {}
