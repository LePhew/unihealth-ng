import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestFormPageRoutingModule } from './request-form-routing.module';

import { RequestFormPage } from './request-form.page';

import { SharedModule } from '../component/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestFormPageRoutingModule,
    SharedModule
  ],
  declarations: [RequestFormPage]
})
export class RequestFormPageModule { }
