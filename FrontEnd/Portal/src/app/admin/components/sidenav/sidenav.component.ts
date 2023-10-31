import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { NavService } from '../../nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private authService: AuthService, private navService: NavService) {}

  logout() {
    this.authService.logout();
  }

  companySettigns() {
    this.navService.nav("company-settings", "Company Settings");
  }
}
