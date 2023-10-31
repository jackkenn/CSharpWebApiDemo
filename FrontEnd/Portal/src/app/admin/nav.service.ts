import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor(private router: Router) { }

  nav(url: string, dashboardBannerTitle: string) {
    this.router.navigateByUrl(url);
    this.dashboardBannerEM.emit();
  }

  @Output() dashboardBannerEM = new EventEmitter();
}
