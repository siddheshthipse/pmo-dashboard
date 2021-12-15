import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: string = 'right';

  title:any;
  single:any[];
  view:any[];
  colorScheme:{domain:any[]}={
    domain:["#5AA464", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  @Input() data;
  constructor() { }

  ngOnInit() {
    this.title=this.data.title;
    this.single=this.data.widgetData;
    this.view=this.data.viewDimensions;
    this.colorScheme.domain=this.data.colorScheme;

    console.log('Creampie');
    console.log(this.data);
    console.log(this.data.colorScheme);
  }

}
