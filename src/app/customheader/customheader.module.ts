import { CustomheaderComponent } from './customheader.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        CustomheaderComponent
    ],
    exports: [
        CustomheaderComponent
    ]
})
export class CustomHeaderModule {}