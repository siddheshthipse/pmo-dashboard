import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css']
})
export class SampleTableComponent implements OnInit {

  tableTitle:any;
  tableColumns:any[];
  tableData:any[];
  fieldTypes:any[];
  widthConfig:any[];
  colorScheme:any[];
  isEmpty:boolean=false;
  // widthConfig=['100px','100px','100px','100px'];

  pageSize=5;

  _object = Object;
  _json = JSON;
  constructor() { }

  @Input() data;
  ngOnInit() {
    console.log(this.data);

    this.tableTitle=this.data.title;
    this.tableData=this.data.widgetData;
    this.tableColumns=this.data.tableColumns;
    this.fieldTypes=this.data.fieldTypes;
    this.widthConfig=this.data.widthConfig;
    this.colorScheme=this.data.colorScheme;

    console.log(this.fieldTypes);

    if(this.tableData.length==0){
      this.isEmpty=true;
    }
  }

}
