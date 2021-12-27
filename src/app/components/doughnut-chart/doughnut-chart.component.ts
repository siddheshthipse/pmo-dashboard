import { Component, Input, OnInit } from "@angular/core";
import { NzModalRef, NzModalService } from "ng-zorro-antd";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"],
})
export class DoughnutChartComponent implements OnInit {
  constructor(private modal: NzModalService) {}

  title: any;
  single: any[];
  view: any[];
  confirmModal: NzModalRef;
  colorScheme: { domain: any[] } = {
    domain: ["#5AA464", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  index:number=0;
  @Input() data;

  options: any;
  serverData: any;
  ngOnInit() {
    this.title = this.data.title;
    this.single = this.data.widgetData;

    const data=this.single;

    this.options = {
      tooltip: {
        trigger: "item",
      },
      color:['#5470c6','#91cc75','#fac858','#ee6666'],
      legend: {
        top: "5%",
        left: "center",
        formatter: function (name) {
          let itemValue = data.filter(item => item.name === name)
          return `${name}: ${itemValue[0].value}`
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "15",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: this.single,
        },
      ],
    };
  }

  onChartClick($event) {
    console.log($event.value);

    this.confirmModal = this.modal.confirm({
      nzTitle: "Click event after clicking on chart",
      nzContent: `Value on the clicked bar was ${$event.value}`,
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!")),
    });
  }
}
