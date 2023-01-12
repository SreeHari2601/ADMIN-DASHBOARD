import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import {  HighchartsChartModule } from 'highcharts-angular';
import { MatchstaticsComponent } from './parts/matchstatics/matchstatics.component';
import { TableComponent } from './parts/table/table.component';
import { LocationComponent } from './parts/location/location.component';
import { PieComponent } from './parts/pie/pie.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatchstaticsComponent,
    TableComponent,
    LocationComponent,
    PieComponent,
  
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule

  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    MatchstaticsComponent,
    TableComponent,
    LocationComponent,
    PieComponent
  
  ]
})
export class SharedModule { }
