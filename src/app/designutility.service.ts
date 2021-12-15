import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from "angular-gridster2";
import { UUID } from "angular2-uuid";

@Injectable({
  providedIn: "root",
})
export class DesignutilityService {
  apiEndpoint:string='http://localhost:3000';

  public options: GridsterConfig = {
    gridType: GridType.Fixed,
    fixedColWidth: 320,
    fixedRowHeight: 111,
    displayGrid: DisplayGrid.Always,
    setGridSize:true,
    pushItems: false,
    swap: true,
    swapWhileDragging: true,
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
    maxCols: 4
  };

  

  constructor(private http:HttpClient) {
  }

  getScreen1(region:string){
    return this.http.get(`${this.apiEndpoint}/${region}`);
  }

  getScreen2(region:string){
    return this.http.get(`${this.apiEndpoint}/${region}`);
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
