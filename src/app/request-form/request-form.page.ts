import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import RequestFormModel from '../core/models/request-form.model';
import { GenericService } from '../services/generic.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.page.html',
  styleUrls: ['./request-form.page.scss'],
})
export class RequestFormPage implements OnInit {
  @Output() toAdd: EventEmitter<any> = new EventEmitter();

  provinces: any[] = [];
  municipalities: any[] = [];
  availableMunicipalities: any[] = [];
  objDiffer: any;
  requestForm = new RequestFormModel();

  constructor(
    private genericService: GenericService,
    private navController: NavController,
    private Router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadProvinces();
    this.loadMunicipality();
  }

  onProvinceChange(provinceId: any) {
    this.availableMunicipalities = [];
    this.availableMunicipalities = this.municipalities.filter(
      (municipality) => {
        return municipality.provinceId === provinceId;
      }
    );
  }

  loadProvinces() {
    this.genericService.getAll('province', (response: any) => {
      this.provinces = response;
    });
  }

  loadMunicipality() {
    this.genericService.getAll('municipality', (response: any) => {
      this.municipalities = response;
    });
  }

  phoneMask(e: any): void {
    var x = e.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    this.requestForm.contact = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  }

  addObRequest() {
    this.toAdd.emit(this.requestForm);
    this.dismissModal(this.requestForm);
  }
  dismissModal(addedRequest?: RequestFormModel) {
    this.modalController.dismiss(addedRequest ? addedRequest : null);
  }
}
