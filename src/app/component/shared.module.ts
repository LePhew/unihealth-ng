import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//Components
import { RequestCardComponent } from './request-card/request-card.component';
import { RequestModalComponent } from './request-modal/request-modal.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [RequestCardComponent, RequestModalComponent],
    exports: [RequestCardComponent, RequestModalComponent]
})
export class SharedModule { }