import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { SampleCardComponent } from '../components/sample-card/sample-card.component';
import { SampleTableComponent } from '../components/sample-table/sample-table.component';
import { SimpleBarGraphComponent } from '../components/simple-bar-graph/simple-bar-graph.component';
import { StackedAreaChartComponent } from '../components/stacked-area-chart/stacked-area-chart.component';
import { StaticTableComponent } from '../components/static-table/static-table.component';
import { DoubleBarGraphComponent } from '../components/double-bar-graph/double-bar-graph.component';

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
      case "card":
        componentFactory = this.resolver.resolveComponentFactory(SampleCardComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "table":
        componentFactory= this.resolver.resolveComponentFactory(SampleTableComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "pie":
        componentFactory= this.resolver.resolveComponentFactory(PieChartComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "bigtable":
        componentFactory= this.resolver.resolveComponentFactory(StaticTableComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "doughnut":
        componentFactory= this.resolver.resolveComponentFactory(DoughnutChartComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "stackedarea":
        componentFactory= this.resolver.resolveComponentFactory(StackedAreaChartComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "simplebar":
        componentFactory= this.resolver.resolveComponentFactory(SimpleBarGraphComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      case "doublebar":
        componentFactory= this.resolver.resolveComponentFactory(DoubleBarGraphComponent);
        componentRef=this.container.createComponent(componentFactory);
        componentRef.instance.data=this.data;
      break;
      default:
        break;
    }
  }

}
