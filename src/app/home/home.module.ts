import { CustomHeaderModule } from './../customheader/customheader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      ChartsModule,
      IonicModule,
    CustomHeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
