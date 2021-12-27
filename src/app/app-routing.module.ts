import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleTableComponent } from './components/sample-table/sample-table.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { StaticTableComponent } from './components/static-table/static-table.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

const routes: Routes = [
  {path:'piechart',component:PieChartComponent},
  {path:'screen1',component:Screen1Component},
  {path:'screen2',component:Screen2Component},
  {path:'sampletable',component:SampleTableComponent},
  {path:'statictable',component:StaticTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
