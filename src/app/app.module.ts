import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons'
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
//Components
import { Screen1Component } from './screen1/screen1.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { StaticTableComponent } from './static-table/static-table.component';
import { AnotherTableComponent } from './another-table/another-table.component';
import { ThirdTableComponent } from './third-table/third-table.component';
import { SampleCardComponent } from './sample-card/sample-card.component';
import { Screen2Component } from './screen2/screen2.component';
import { Card2Component } from './card2/card2.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    SampleTableComponent,
    StaticTableComponent,
    AnotherTableComponent,
    ThirdTableComponent,
    SampleCardComponent,
    Screen2Component,
    Card2Component,
    PieChartComponent,
    DynamicContentComponent
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
    NgxChartsModule,
    DynamicModule.withComponents([SampleTableComponent,AnotherTableComponent,ThirdTableComponent,SampleCardComponent])
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent],
  entryComponents:[SampleTableComponent, AnotherTableComponent,ThirdTableComponent,SampleCardComponent]
})
export class AppModule { }
