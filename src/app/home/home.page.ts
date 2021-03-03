import { Component  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../services/generic.service';
import { RequestModalComponent } from '../component/request-modal/request-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  isDisabled: boolean = false;
  requests: any = [];
  masterDetailRequest: any;
  requestsEndpoint: string = 'request/';

  constructor(private genericService: GenericService, route: ActivatedRoute, public modalController: ModalController) {
    route.params.subscribe(val => {
      this.pushData();
    });
  }

  ngOnInit() {
    
  }

  onClicked(data: any){
    this.presentModal();
    this.masterDetailRequest = data;
  }
 
  async presentModal() {
    const modal = await this.modalController.create({
      component: RequestModalComponent,
      cssClass: 'my-modal-class'
    });
    return await modal.present();
  }

  pushData() {
    this.genericService.getAll(this.requestsEndpoint, (requests) => {
      this.requests = requests;
    })
  }

  loadData(ev: any) {
    setTimeout(() => {
      this.pushData();
      console.log("Loaded data");
      ev.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.requests.length == 1000) {
        ev.target.disabled = true;
      }
    }, 500);
  }

}
