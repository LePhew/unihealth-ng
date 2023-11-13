import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() location: string = "";
  @Input() contact: string = "";

  constructor() { }

  ngOnInit() { }

}
