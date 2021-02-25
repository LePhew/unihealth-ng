import { Component } from '@angular/core';
import { GenericService } from '../services/generic.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  readonly isDisabled: boolean = false;
  readonly items = [];

  readonly requestsEndpoint: string = 'request/';

  constructor(private genericService: GenericService) {
    this.pushData();
  }


  pushData() {
    this.genericService.getAll(this.requestsEndpoint, (requests) => {
      this.items.push(requests);
    })
  }

  loadData(ev: any) {
    setTimeout(() => {
      this.pushData();
      console.log("Loaded data");
      ev.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.items.length == 1000) {
        ev.target.disabled = true;
      }
    }, 500);
  }

}
