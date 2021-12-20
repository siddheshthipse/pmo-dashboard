import {
  Component,
  OnInit
} from "@angular/core";
import { DesignutilityService } from "../designutility.service";
import { GridsterItem } from "angular-gridster2";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-screen1",
  templateUrl: "./screen1.component.html",
  styleUrls: ["./screen1.component.css"],
})
export class Screen1Component implements OnInit {

  options = this._du.options;
  layout: GridsterItem[] = [];
  params: string;
  isSpinning:boolean;

  

  constructor(
    private _du: DesignutilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      this.isSpinning=true;

      this.params = params.groupBy;
      console.log('Params ARE')
      console.log(this.params);

      // this._du.getScreen1(this.params).subscribe((returnData: any) => {
      //   console.log(returnData);
      //   this.layout=returnData;
      // });

      const widgetData= await this._du.getDashboardWidgets().toPromise();
      console.log('widgetData');
      console.log(widgetData.data.widgets);

      const someData=await this._du.getWidgetData(widgetData, this.params);
      console.log('someData');
      console.log(someData);
      this.layout=someData;
      this.isSpinning=false;
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
