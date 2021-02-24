import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  readonly isDisabled: boolean = false;
  readonly items = [];

  constructor() {
    this.pushData();
  }


  pushData() {
    const max = this.items.length + 20;
    const min = max - 20;
    for (let i = min; i < max; i++) {
      this.items.push(i);
    }
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
