import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../services/generic.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isDisabled: boolean = false;
  requests: any = [];

  requestsEndpoint: string = 'request/';

  constructor(private genericService: GenericService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.pushData();
    });
  }

  ngOnInit() {
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
