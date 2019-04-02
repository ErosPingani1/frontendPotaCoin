import { CustomHeaderModule } from '../customheader/customheader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    }
];

@NgModule({
    imports: [
        ChartsModule,
        CommonModule,
        FormsModule,
        IonicModule,
        CustomHeaderModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomePage]
})
export class HomePageModule {}
