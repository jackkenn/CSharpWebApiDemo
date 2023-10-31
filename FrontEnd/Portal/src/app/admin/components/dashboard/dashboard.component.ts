import { Component, Input } from '@angular/core';
import { NavService } from '../../nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() bannerTitle: string = this.navService.dashboardBannerTitle;

  constructor(private navService: NavService) {}

  ngOnInit() {
    this.navService.dashboardBannerEM.subscribe(() => this.bannerTitle = this.navService.dashboardBannerTitle);
  }
}
