import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherTableComponent } from './another-table/another-table.component';
import { Card2Component } from './card2/card2.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { StaticTableComponent } from './static-table/static-table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ThirdTableComponent } from './third-table/third-table.component';

const routes: Routes = [
  {path:'piechart',component:PieChartComponent},
  {path:'screen1',component:Screen1Component},
  {path:'screen2',component:Screen2Component},
  {path:'card2',component:Card2Component},
  {path:'sampletable',component:SampleTableComponent},
  {path:'statictable',component:StaticTableComponent},
  {path:'anothertable',component:AnotherTableComponent},
  {path:'thirdtable',component:ThirdTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
