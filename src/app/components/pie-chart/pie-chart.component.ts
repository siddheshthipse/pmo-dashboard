import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: string = 'right';

  title:any;
  single:any[];
  view:any[];
  colorScheme:{domain:any[]}={
    domain:["#5AA464", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  @Input() data;
  constructor() { }

  serverData:any;
  options:any;
  ngOnInit() {
    this.title=this.data.title;
    this.single=this.data.widgetData;
    this.view=this.data.viewDimensions;
    this.colorScheme.domain=this.data.colorScheme;

    const data=this.single;

    this.options = {
      tooltip: {
        trigger: 'item'
      },
      color:['#5470c6','#91cc75','#fac858'],
      legend: {
        top: '5%',
        left:'center',
        orient:'horizontal',
        formatter: function (name) {
          let itemValue = data.filter(item => item.name === name)
          return `${name}: ${itemValue[0].value}`
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '60%',
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '15',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data:this.single
        }
      ]
    };
  }

  onChartClick($event){
    console.log($event.value)
  }
}
