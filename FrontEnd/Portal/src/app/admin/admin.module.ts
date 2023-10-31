import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CompanySettingsComponent } from './components/company-settings/company-settings.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserTableComponent } from './components/user-table/user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NewUserDetailsComponent } from './components/new-user-details/new-user-details.component';
import { MemberDetailsFormComponent } from './components/member-details-form/member-details-form.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    CompanySettingsComponent,
    UserTableComponent,
    NewUserDetailsComponent,
    MemberDetailsFormComponent,
    NewRequestComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
