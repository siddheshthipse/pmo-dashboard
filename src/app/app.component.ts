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
  
  constructor(private _du:DesignutilityService, private router:Router) { }

  ngOnInit() {
  }

  onClick(value:string){
    console.log(value);
    this.router.navigate(['/screen1'], { queryParams: { region: 'ksa' } });
  }

  navigateTo(path:string){
    this.router.navigate([path]);
  }
}
