import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestCardDetailComponent } from '../request-card-detail/request-card-detail.component';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() title: string;
  @Input() province: string;
  @Input() municipality: string;
  @Input() contact: string;
  @Input() bloodType: string;
  @Input() responseDate: string;

  requestImg: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.requestImg = `/assets/bloodTypes/${this.bloodType}.png`;
    this.municipality = this.titleCase(this.municipality);
  }

  titleCase(str: string) {
    const splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: RequestCardDetailComponent,
      componentProps: {
        title: this.title,
        municipality: this.municipality,
        contact: this.contact,
        bloodType: this.bloodType,
        province: this.province,
        responseDate: this.responseDate
        
      }
    });
    modal.onDidDismiss().then((requestForm) => {
      
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onClick(){
    this.openModal()
  }
}
