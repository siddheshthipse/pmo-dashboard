import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-table',
  templateUrl: './third-table.component.html',
  styleUrls: ['./third-table.component.css']
})
export class ThirdTableComponent implements OnInit {

  tableData = [
    {
      outcome: '20 days',
      company: 'Saudi Aramco',
      plannedDate: '21-Jul-2021',
      expectedDate:'04-Aug-2021',
      consequence:'Delayed by 28 days'
    },
    {
      outcome: '20 days',
      company: 'Saudi Aramco',
      plannedDate: '21-Jul-2021',
      expectedDate:'04-Aug-2021',
      consequence:'Delayed by 28 days'
    },
    {
      outcome: '20 days',
      company: 'Saudi Aramco',
      plannedDate: '21-Jul-2021',
      expectedDate:'04-Aug-2021',
      consequence:'Delayed by 28 days'
    },
    {
      outcome: '20 days',
      company: 'Saudi Aramco',
      plannedDate: '21-Jul-2021',
      expectedDate:'04-Aug-2021',
      consequence:'Delayed by 28 days'
    }
  ];

  tableTitle='Delayed Projects'
  tableColumns=['Outcome','Company','Planned Date','Expected Date','Consequence']
  fieldTypes=['text','text','text','text','text']
  widthConfig=['100px','150px','150px','150px','200px']

  _object=Object;
  _json=JSON;
  constructor() { }

  ngOnInit() {
    
  }

}
