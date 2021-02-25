import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//Components
import { RequestCardComponent } from './request-card/request-card.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [RequestCardComponent],
    exports: [RequestCardComponent]
})
export class SharedModule { }