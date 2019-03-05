import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoonPortalComponent } from './moon-portal.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContentViewComponent } from './components/content-view/content-view.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [{
path:'',
component:MoonPortalComponent,
children:[
  {
    path:'',
    component:MainContentComponent
  },
  {
    path:'view/:id',
    component:ContentViewComponent
  },
  {
    path:'employee/add',
    component:AddEmployeeComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoonPortalRoutingModule { }
