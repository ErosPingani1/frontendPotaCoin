import { CustomHeaderModule } from './../customheader/customheader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatalogopremiPage } from './catalogopremi.page';

const routes: Routes = [
  {
    path: 'catalogopremi',
    component: CatalogopremiPage,
    children: [
      {
        path: 'catalogo',
        loadChildren:'./catalogopremi/tabs/catalogo/catalogo.module#CatalogoPageModule'
      },
      {
        path: 'wishlist',
        loadChildren: './catalogopremi/tabs/wishlist/wishlist.module#WishlistPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'catalogopremi/catalogo',
    pathMatch: 'full'
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
    CatalogopremiPage
  ]
})
export class CatalogopremiPageModule {}
