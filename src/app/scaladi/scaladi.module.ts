import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScaladiRoutingModule } from './scaladi-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorksComponent } from './components/works/works.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    WorksComponent
  ],
  imports: [
    CommonModule,
    ScaladiRoutingModule,
    SharedModule
  ]
})
export class ScaladiModule { }
