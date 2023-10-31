import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  dashboardBannerTitle: string = "Home";
  constructor(private router: Router) { }

  nav(url: string, dashboardBannerTitle: string) {
    this.router.navigateByUrl(url);
    this.dashboardBannerTitle = dashboardBannerTitle;
    this.dashboardBannerEM.emit();
  }

  @Output() dashboardBannerEM = new EventEmitter();
}
