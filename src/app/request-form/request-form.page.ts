import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.page.html',
  styleUrls: ['./request-form.page.scss'],
})
export class RequestFormPage implements OnInit {

  countries: any[] = [];
  cities: any[] = [];
  title: string = "";
  bloodType: string = "";
  address: string = "";
  expectedTime: Date;
  note: string = "";


  constructor(private genericService: GenericService) { }

  ngOnInit() {
  }

  addRequest() {
    console.log("they called me");
  }


}
