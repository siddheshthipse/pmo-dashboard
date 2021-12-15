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
  region: string;

  // component: any;

  constructor(
    private _du: DesignutilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.region = params.region;

      if (this.region == undefined || this.region == "") {
        this.region = "ktglobal";
      }

      this._du.getScreen1(this.region).subscribe((returnData: any[]) => {
        this.layout = [];
        console.log(returnData);
        this.resolver(returnData);
      });
    });
    //service call to get jsonArray and then call the resolver
  }

  resolver(incomingJsonArray: any[]) {
    incomingJsonArray.forEach((element) => {
      switch (element.componentType) {
        case "SampleCardComponent":
          element.componentType = SampleCardComponent;
          this.layout.push(element);
          break;
        case "SampleTableComponent":
          element.componentType = SampleTableComponent;
          this.layout.push(element);
          break;
        case "StaticTableComponent":
          element.componentType = StaticTableComponent;
          this.layout.push(element);
          break;
        case "PieChartComponent":
          element.componentType = PieChartComponent;
          this.layout.push(element);
          break;
        default:
          break;
      }
    });
  }

  // addItem() {
  //   this._du.addItem();
  // }

  // deleteItem(id: string) {
  //   this._du.deleteItem(id);
  // }
}
