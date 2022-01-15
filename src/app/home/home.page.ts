import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../services/generic.service';
import { ModalController } from '@ionic/angular';
import { RequestFormPage } from '../request-form/request-form.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly requestsEndpoint: string = 'request';
  readonly municipalityEndpoint: string = 'municipality';

  provinces: any[] = [];
  isDisabled: boolean = false;
  requests: Array<any> = null;
  selectedProvince: string = '0';
  selectedBloodType: string = '';
  isPaginationActive: boolean = false;
  isFilterActive: boolean = false;
  defaultSettings: any = { skip: 0, take: 5 };

  constructor(
    private genericService: GenericService,
    private route: ActivatedRoute,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.loadRequests();
    });
    this.loadProvinces();
  }

  ionViewWillEnter() {
    this.loadRequests();
  }

  loadProvinces() {
    this.genericService.getAll('province', (response: any) => {
      this.provinces.push({ id: '0', province: 'Todos' }, ...response);
    });
  }

  loadByProvince() {
    this.isPaginationActive = false;
    if (this.selectedProvince == '0') {
      this.isFilterActive = false;
      this.loadRequests();
    } else {
      this.genericService.getWithBody(
        `${this.requestsEndpoint}/getByProvince`,
        { provinceId: this.selectedProvince },
        (response: any) => {
          if (response) {
            this.requests = [];
            this.requests.push(...response);
          }
        }
      );
    }
  }

  loadRequests() {
    if (this.isPaginationActive) {
      this.defaultSettings.skip = this.defaultSettings.skip += 5;
    } else {
      this.requests = [];
      this.defaultSettings = { skip: 0, take: 5 };
    }
    this.genericService.getWithBody(
      this.requestsEndpoint,
      this.defaultSettings,
      (response: any) => {
        if (response) {
          this.requests.push(...response);
          this.isPaginationActive = true;
        }
      }
    );
  }

  loadData(ev: any) {
    setTimeout(() => {
      if (this.selectedProvince == '0') {
        this.loadRequests();
      }
      ev.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.requests.length == 1000) {
        ev.target.disabled = true;
      }
    }, 500);
  }

  loadOptions() {}

  addRequest(requestForm) {
    if (requestForm != null) {
      this.genericService.create(
        'request/create',
        requestForm,
        (response: any) => {
          if (response) {
            console.log('loaded requests');
            this.loadRequests();
          }
        }
      );
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: RequestFormPage,
    });
    modal.onDidDismiss().then((requestForm) => {
      this.addRequest(requestForm.data);
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
