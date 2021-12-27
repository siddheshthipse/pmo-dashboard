import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-table',
  templateUrl: './static-table.component.html',
  styleUrls: ['./static-table.component.css']
})
export class StaticTableComponent implements OnInit {

  title:any;
  tableColumns:any[];
  tableData:any[];
  fieldTypes:any[];

  _object = Object;
  _json = JSON;
  constructor() { }

  @Input() data:any;
  ngOnInit() {
    this.title=this.data.title;
    this.tableColumns=this.data.tableColumns;
    this.tableData=this.data.widgetData;
    this.fieldTypes=this.data.fieldTypes;
  }

  // tableWidthConfig = ['100px', '200px', '200px', '100px', '100px', '200px', '100px', '100px', '100px'];

  
}
