import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../shared/material.module';
import { MoonPortalRoutingModule } from './moon-portal-routing.module';
import { MoonPortalComponent } from './moon-portal.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { FilterService } from './services/filter.service';
import { ContentViewComponent } from './components/content-view/content-view.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoonPortalComponent, MainContentComponent, SideNavComponent, ToolbarComponent, ContentViewComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    MoonPortalRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    EmployeeService,
    FilterService
  ]
})
export class MoonPortalModule { }
