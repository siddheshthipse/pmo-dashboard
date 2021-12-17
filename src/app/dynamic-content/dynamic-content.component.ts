import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { SampleCardComponent } from '../sample-card/sample-card.component';
import { SampleTableComponent } from '../sample-table/sample-table.component';
import { StaticTableComponent } from '../static-table/static-table.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit {

  @Input() componentName:any;
  @Input() data:any;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef; 
  constructor(private resolver:ComponentFactoryResolver) { }

  ngOnInit() {
    let componentFactory:any;
    let componentRef:any;

    switch (this.componentName) {
      case "SampleCardComponent":
        componentFactory = this.resolver.resolveComponentFactory(SampleCardComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "SampleTableComponent":
        componentFactory= this.resolver.resolveComponentFactory(SampleTableComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "PieChartComponent":
        componentFactory= this.resolver.resolveComponentFactory(PieChartComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "StaticTableComponent":
        componentFactory= this.resolver.resolveComponentFactory(StaticTableComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      default:
        break;
    }
  }

}
