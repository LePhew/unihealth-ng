import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() city: string;
  @Input() contact: string;
  @Input() bloodType: string;
  @Input() note: string;
  @Input() address: string;
  @Output() onCardClic = new EventEmitter();

  requestImg: string;
  
  constructor() { }

  ngOnInit() { 
    this.requestImg = `/assets/bloodTypes/${this.bloodType}.svg`;
  }

  onCardClick(){
    this.onCardClic.emit({id: this.id, title: this.title, city: this.city, bloodType: this.bloodType, contact: this.contact, note: this.note, address: this.address});
  }
}
