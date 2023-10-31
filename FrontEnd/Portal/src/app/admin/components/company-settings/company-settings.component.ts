import { Component } from '@angular/core';
import { NavService } from '../../nav.service';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent {
  constructor(private navService: NavService) {}
  
  newUserDetails() {
    this.navService.nav("new-user");
  }
}
