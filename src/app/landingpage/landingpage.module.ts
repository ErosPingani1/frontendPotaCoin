import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingpagePage } from './landingpage.page';
import {ChartsModule} from "ng2-charts";
import {CustomHeaderModule} from "../customheader/customheader.module";

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
                component: LandingpagePage
            }
        ])
    ],
    declarations: [
        LandingpagePage
    ]
})
export class LandingpagePageModule {}
