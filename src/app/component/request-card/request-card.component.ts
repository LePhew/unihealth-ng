import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {

  @Input() title: string;
  @Input() province: string;
  @Input() municipality: string;
  @Input() contact: string;
  @Input() bloodType: string;

  requestImg: string;
  
  constructor() { }

  ngOnInit() { 
    this.requestImg = `/assets/bloodTypes/${this.bloodType}.svg`;
    this.municipality = this.titleCase(this.municipality);
  }

  titleCase(str : string) {
    const splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
}
