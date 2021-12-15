import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-table',
  templateUrl: './another-table.component.html',
  styleUrls: ['./another-table.component.css']
})
export class AnotherTableComponent implements OnInit {

  @Input() data;

  tableTitle:any;
  tableData:any;
  
  pageSize=3;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.tableTitle=this.data.title;
    this.tableData=this.data.tableData;
  }

 
}
