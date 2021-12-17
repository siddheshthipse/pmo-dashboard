import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from "angular-gridster2";
import { UUID } from "angular2-uuid";
import { WidgetModel } from "./models/componentdata.interface";
import { Observable, from, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DesignutilityService {
  apiEndpoint: string = "http://localhost:3000";

  public options: GridsterConfig = {
    gridType: GridType.Fixed,
    fixedColWidth: 320,
    fixedRowHeight: 111,
    displayGrid: DisplayGrid.OnDragAndResize,
    setGridSize: true,
    pushItems: false,
    swap: true,
    swapWhileDragging: true,
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
    maxCols: 4,
  };

  constructor(private http: HttpClient) {}

  getScreen1(region: string) {
    return this.http.get<WidgetModel[]>(`http://localhost:8000/${region}`);
  }

  getScreen2(region: string) {
    return this.http.get(`http://localhost:8000/${region}`);
  }

  getDashboardWidgets() {
    const dashboardID = "61b867c0bff3e58a391a6ba6";

    return this.http
      .post<{ msg: string; data: WidgetModel[] }>(`${this.apiEndpoint}/dashboard/${dashboardID}`, {
        workplace: {
          dbname: "ktern",
        },
      })
  }

  async getWidgetData(widgetInfo: { msg: string; data: WidgetModel[] }) {
    const dashboardWidgetArray: any[]=[];

    // console.log(widgetInfo.data.length);
    widgetInfo.data.forEach(async (element) => {
      const someData:any=await this.http.post(`${this.apiEndpoint}/run/${element}`, {workplace: {dbname: "ktern",},user: {userId: "5f1861f101a0882b7c168a6d",}}).toPromise();
      console.log(someData.data);
      dashboardWidgetArray.push(someData.data);
    });

    await new Promise((resolve) => setTimeout(resolve, 500));
    
    console.log(dashboardWidgetArray);
    return dashboardWidgetArray;
    // setTimeout(() => {
    //   console.log(dashboardWidgetArray);
    // }, 300);
  }

  // addItem() {
  //   this.layout.push({
  //     cols: 5,
  //     id: UUID.UUID(),
  //     rows: 5,
  //     x: 0,
  //     y: 0,
  //   });
  // }

  // deleteItem(id: string): void {
  //   const item = this.layout.find((d) => d.id === id);
  //   this.layout.splice(this.layout.indexOf(item), 1);
  // }
}
