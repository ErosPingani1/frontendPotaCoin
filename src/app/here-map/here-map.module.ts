import { HereMapComponent } from './here-map.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        HereMapComponent
    ],
    exports: [
        HereMapComponent
    ]
})
export class HereMapComponentModule {}