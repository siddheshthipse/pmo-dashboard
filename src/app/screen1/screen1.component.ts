import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { DesignutilityService } from "../designutility.service";
import { SampleTableComponent } from "./../sample-table/sample-table.component";
import { GridsterItem } from "angular-gridster2";
import { SampleCardComponent } from "../sample-card/sample-card.component";
import { StaticTableComponent } from "../static-table/static-table.component";
import { ActivatedRoute } from "@angular/router";
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { WidgetModel } from "../models/componentdata.interface";

@Component({
  selector: "app-screen1",
  templateUrl: "./screen1.component.html",
  styleUrls: ["./screen1.component.css"],
})
export class Screen1Component implements OnInit {
  // @ViewChild("container", { read: ViewContainerRef })
  // container: ViewContainerRef;

  options = this._du.options;
  layout: GridsterItem[] = [];
  params: string;

  // component: any;

  constructor(
    private _du: DesignutilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      console.log(params);
      this.params = params.groupBy;

      if (this.params == undefined || this.params == "") {
        this.params = "ktglobal";
      }

      this._du.getScreen1(this.params).subscribe((returnData: any) => {
        console.log(returnData);
        this.layout=returnData;
      });

      // const widgetData= await this._du.getDashboardWidgets().toPromise();
      // console.log(widgetData);

      // const someData=await this._du.getWidgetData(widgetData);
      // console.log(someData);
      // this.layout=someData;
    });
    //service call to get jsonArray and then call the resolver
  }

  // resolver(incomingJsonArray: WidgetModel[]) {
  //   this.layout=[];

  //   console.log('Incoming json array')
  //   console.log(incomingJsonArray);

  //   incomingJsonArray.forEach((element) => {
  //     switch (element.componentType) {
  //       case "SampleCardComponent":
  //         element.componentType = SampleCardComponent;
  //         this.layout.push(element);
  //         break;
  //       case "SampleTableComponent":
  //         element.componentType = SampleTableComponent;
  //         this.layout.push(element);
  //         break;
  //       case "StaticTableComponent":
  //         element.componentType = StaticTableComponent;
  //         this.layout.push(element);
  //         break;
  //       case "PieChartComponent":
  //         element.componentType = PieChartComponent;
  //         this.layout.push(element);
  //         break;
  //       default:
  //         break;
  //     }
  //   });

  //   console.log('Gridster Layout');
  //   console.log(this.layout);
  // }

  
  // addItem() {
  //   this._du.addItem();
  // }

  // deleteItem(id: string) {
  //   this._du.deleteItem(id);
  // }
}
