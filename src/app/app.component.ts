import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from './designutility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'adiyogi';
  selectedRegion:string='ktglobal';
  radioValue='A';
  
  sidenavData:{
    title:string,
    collapse:boolean,
    icon:string,
    icontheme:string,
    data:{
      value:string,
      placeholder:string
    }[]
  }[];
  
  constructor(private _du:DesignutilityService, private router:Router) { }

  ngOnInit() {
    this.sidenavData=[
      {
        title:"Users",
        collapse:true,
        icon:"user",
        icontheme:"outline",
        data:[
          {
            value:"9922636854",
            placeholder:"Siddhesh Thipse"
          },
          {
            value:'9881046104',
            placeholder:"John Samuel"
          },
          {
            value:"9370717620",
            placeholder:"Gokulnath S"
          },
          {
            value:"9370717667",
            placeholder:"Avinash Singh"
          },
          {
            value:"9372017620",
            placeholder:"Vignesh Barani S"
          }
        ]
      },
      {
        title:"Country",
        collapse:false,
        icon:"global",
        icontheme:"outline",
        data:[
          {
            value:"91",
            placeholder:"India"
          },
          {
            value:"36",
            placeholder:"Thailand"
          }
        ]
      }
    ]
  }

  onClick(value:string){
    console.log(value);
    const queryParamObj={
      groupBy:value
    }
    this.router.navigate(['/screen1'], { queryParams: queryParamObj });
  }

  navigateTo(path:string){
    this.router.navigate([path]);
  }


}
