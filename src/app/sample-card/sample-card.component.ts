import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.css']
})
export class SampleCardComponent implements OnInit {

  cardTitle:any;
  cardData:any;
  colorScheme:any[];
  constructor() { }

  @Input() data:any;
  ngOnInit() {
    console.log(this.data);

    this.cardTitle=this.data.title;
    this.cardData=this.data.widgetData;
    this.colorScheme=this.data.colorScheme;
  }

}
