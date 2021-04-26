import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../services/generic.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  provinces: any[] = [];
  isDisabled: boolean = false;
  requests: any = [];
  selectedProvince: string = "1";
  selectedBloodType: string = "";
  isPaginationActive: boolean = false;
  defaultSettings: any = {skip:0, take:5};
  readonly requestsEndpoint: string = 'request/';
  readonly municipalityEndpoint: string = 'municipality/';

  constructor(private genericService: GenericService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.loadRequests();
    });
  }

  ngOnInit() {
    this.loadProvinces();
  }

  loadProvinces() {
    this.genericService.getAll('province', (response: any) => {
      this.provinces = response;
    })
  }

  onProvinceChange(provinceId) {
    console.log(provinceId);
  }

  loadRequests() {
    if (this.isPaginationActive){
      this.defaultSettings.skip = this.defaultSettings.skip+=5;
    }
    this.genericService.getWithPagination(this.requestsEndpoint, this.defaultSettings, (response: any) => {
      if (response) {
        this.requests.push(...response);
        this.isPaginationActive = true;
      }
    });
  }

  loadData(ev: any) {
    setTimeout(() => {
      this.loadRequests();
      console.log("Loaded data");
      ev.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.requests.length == 1000) {
        ev.target.disabled = true;
      }
    }, 500);
  }

  loadOptions() {

  }

}
