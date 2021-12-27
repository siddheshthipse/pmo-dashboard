import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-simple-bar-graph',
  templateUrl: './simple-bar-graph.component.html',
  styleUrls: ['./simple-bar-graph.component.css']
})
export class SimpleBarGraphComponent implements OnInit {

  constructor(private modal: NzModalService) { }

  title:any;
  single:any[];
  confirmModal: NzModalRef;
  @Input() data;

  options:any;
  ngOnInit() {
    this.title=this.data.title;

    this.options = {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      yAxis: {
        type: 'value'
      },
      color:["#e13f00"],
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          label:{
            show:true
          }
        }
      ]
    };
  }

  onChartClick($event){
    console.log($event.value)
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Click event after clicking on bar',
      nzContent: `Value on the clicked bar was ${$event.value}`,
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
}
