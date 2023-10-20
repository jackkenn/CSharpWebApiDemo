import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from '../auth.guard';

const publicRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
