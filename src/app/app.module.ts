import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from "ng-zorro-antd";
import { IconDefinition } from "@ant-design/icons-angular";
import * as AllIcons from "@ant-design/icons-angular/icons";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { GridsterModule } from "angular-gridster2";
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from "ngx-echarts";
import * as echarts from "echarts";

//Components
import { Screen1Component } from "./screen1/screen1.component";
import { Screen2Component } from "./screen2/screen2.component";
import { DynamicContentComponent } from "./dynamic-content/dynamic-content.component";

import { SampleTableComponent } from "./components/sample-table/sample-table.component";
import { StaticTableComponent } from "./components/static-table/static-table.component";
import { SampleCardComponent } from "./components/sample-card/sample-card.component";

import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { DoughnutChartComponent } from "./components/doughnut-chart/doughnut-chart.component";
import { StackedAreaChartComponent } from "./components/stacked-area-chart/stacked-area-chart.component";
import { SimpleBarGraphComponent } from './components/simple-bar-graph/simple-bar-graph.component';
import { DoubleBarGraphComponent } from './components/double-bar-graph/double-bar-graph.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    SampleTableComponent,
    StaticTableComponent,
    SampleCardComponent,
    Screen2Component,
    PieChartComponent,
    DynamicContentComponent,
    DoughnutChartComponent,
    StackedAreaChartComponent,
    SimpleBarGraphComponent,
    DoubleBarGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    GridsterModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SampleTableComponent,
    SampleCardComponent,
    StaticTableComponent,
    PieChartComponent,
    DoughnutChartComponent,
    StackedAreaChartComponent,
    SimpleBarGraphComponent,
    DoubleBarGraphComponent
  ],
})
export class AppModule {}
