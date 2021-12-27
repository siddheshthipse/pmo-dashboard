import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-double-bar-graph',
  templateUrl: './double-bar-graph.component.html',
  styleUrls: ['./double-bar-graph.component.css']
})
export class DoubleBarGraphComponent implements OnInit {

  title:any;
  single:any[];
  confirmModal: NzModalRef;
  @Input() data;

  options:any;
  constructor(private modal: NzModalService) { }

  ngOnInit() {
    this.title=this.data.title;

    this.options = {
      legend: {},
      tooltip: {},
      color:['#91cc75','#fac858'],
      dataset: {
        source: [
          ['effort', 'Planned', 'Actual'],
          ['Jan', 250, 200],
          ['Feb', 250, 180],
          ['Mar', 250, 150],
          ['Apr', 250, 240],
          ['May', 250, 160],
          ['Jun', 250, 200],
          ['Jul', 250, 180],
          ['Aug', 250, 210],
          ['Sept', 250, 170],
          ['Oct', 250, 160],
          ['Nov', 250, 175],
          ['Dec', 250, 220],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar', label:{show:true} }, { type: 'bar', label:{show:true} }]
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
