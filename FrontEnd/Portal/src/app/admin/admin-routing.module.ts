import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanySettingsComponent } from './components/company-settings/company-settings.component';
import { NewUserDetailsComponent } from './components/new-user-details/new-user-details.component';
import { NewRequestComponent } from './components/new-request/new-request.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'company-settings',
        component: CompanySettingsComponent,
      },
      {
        path: 'new-user',
        component: NewUserDetailsComponent,
      },
      {
        path: 'new-request',
        component: NewRequestComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
