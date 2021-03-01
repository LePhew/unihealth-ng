import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() title: string;
  @Input() city: string;
  @Input() contact: string;
  @Input() bloodType: string

  requestsEndpoint: string = '/assets/bloodTypes/a+.svg';
  
  constructor() { }

  ngOnInit() { }

}