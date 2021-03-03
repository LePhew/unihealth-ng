import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import RequestFormModel from '../core/models/request-form.model';
import { GenericService } from '../services/generic.service';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.page.html',
  styleUrls: ['./request-form.page.scss'],
})

export class RequestFormPage implements OnInit {
  requestsEndpoint: string = 'request/create';
  countries: any[] = ["República Dominicana"];
  cities: any[] = ['Santo Domingo', 'Santiago', 'Santo Domingo Este', 'Santo Domingo Norte', 'Santo Domingo Oeste', 'Puerto Plata'];
  requestForm = new RequestFormModel();


  constructor(private genericService: GenericService, private navController: NavController, public toastController: ToastController, public loadingController: LoadingController) { }

  ngOnInit() {

  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'circular',
      duration: 200,
      message: 'Loading...',
      translucent: true,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

  phoneMask(e: any): void {
    var x = e.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    this.requestForm.contact = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  }

  addRequest() {
    this.presentLoadingWithOptions();
    this.genericService.create(this.requestsEndpoint, this.requestForm, (response) => {
      if (response) {
        this.succesRequestToast();
        this.navController.back();
      }
    });
  }

  async succesRequestToast() {
    const toast = await this.toastController.create({
      message: 'Solicitud creada.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }
}
