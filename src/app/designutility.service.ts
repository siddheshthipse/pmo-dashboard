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
    displayGrid: DisplayGrid.Always,
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
    region="ktglobal";
    return this.http.get(`http://localhost:8000/${region}`);
  }

  getScreen2(region: string) {
    return this.http.get(`http://localhost:8000/${region}`);
  }

  getSideNavigation(){
    return this.http.post(`${this.apiEndpoint}/sidebar`,{workplace: {dbname: "ktern"}});
  }

  getDashboardWidgets() {
    const dashboardID = "61b867c0bff3e58a391a6ba6";

    return this.http
      .post<{ msg: string; data:{widgets:any[]} }>(`${this.apiEndpoint}/dashboard/${dashboardID}`, {
        workplace: {
          dbname: "ktern",
        },
      })
  }

  async getWidgetData(widgetInfo: { msg: string; data:{widgets:any[]} }, filterCondition:string) {
    const dashboardWidgetArray: any[]=[];
    let body;

    console.log('FILTER ConDIOTION')
    console.log(filterCondition);
    if(filterCondition==undefined || filterCondition==""){
      body={workplace: {dbname: "ktern"}};
    }else{
      body={
        workplace: {
            dbname: "ktern"
        },
        query: {
            field: "assignedTo",
            operator: "=",
            value: filterCondition
        }
    }
    }

    // console.log(widgetInfo.data.length);
    widgetInfo.data.widgets.forEach(async (element) => {
      const someData:any=await this.http.post(`${this.apiEndpoint}/widget/${element}`, body).toPromise();
      console.log(someData.data);
      dashboardWidgetArray.push(someData.data);
    });

    await new Promise((resolve) => setTimeout(resolve, 6000));
    
    console.log(dashboardWidgetArray);
    return dashboardWidgetArray;
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
