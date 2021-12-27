import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from './services/designutility.service';
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
  
  sidenavData:any;
  
  constructor(private _du:DesignutilityService, private router:Router) { }

  async ngOnInit() {
    // const someValue:any= await this._du.getSideNavigation().toPromise();
    // console.log(someValue.data);
    // this.sidenavData=someValue.data;
  }

  onClick(value:string){
    const queryParamObj={
      groupBy:value
    }
    this.router.navigate(['/screen1'], { queryParams: queryParamObj });
  }

  navigateTo(path:string){
    this.router.navigate([path]);
  }


}
