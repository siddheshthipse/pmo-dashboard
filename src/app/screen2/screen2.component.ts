import { Component, OnInit } from "@angular/core";
import { GridsterItem } from "angular-gridster2";
import { DesignutilityService } from "../designutility.service";
import { SampleCardComponent } from "../sample-card/sample-card.component";
import { SampleTableComponent } from "../sample-table/sample-table.component";
import { StaticTableComponent } from "../static-table/static-table.component";

@Component({
  selector: "app-screen2",
  templateUrl: "./screen2.component.html",
  styleUrls: ["./screen2.component.css"],
})
export class Screen2Component implements OnInit {
  constructor(private _du: DesignutilityService) {}
  options = this._du.options;
  layout: GridsterItem[] = [];

  ngOnInit() {
    this._du.getScreen2('screen2').subscribe((returnData:any[])=>{
      this.resolver(returnData);
    })
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
        default:
          break;
      }
    });
  }
}