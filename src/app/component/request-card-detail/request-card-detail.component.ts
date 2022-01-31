import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request-card-detail',
  templateUrl: './request-card-detail.component.html',
  styleUrls: ['./request-card-detail.component.scss'],
})
export class RequestCardDetailComponent implements OnInit {

  title: string = "";
  municipality: string = "";
  contact: string = "";
  bloodType: string = "";
  province: string = "";
  responseDate: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss();
  }
}
