import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//Components
import { RequestCardComponent } from './request-card/request-card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [RequestCardComponent, HeaderComponent],
    exports: [RequestCardComponent, HeaderComponent]
})
export class SharedModule { }