import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [
    {
      id: 1,
      name: 'admin',
      username: 'admin',
      password: 'pass',
    },
  ];

  session: any;

  constructor(private router: Router) {
    let local: any = localStorage.getItem('session');
    if (local) {
      this.session = JSON.parse(local);
    }
  }

  login(username: string, password: string) {
    let user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
      this.router.navigateByUrl('/admin');
    }

    return user;
  }

  logout() {
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/login');
  }
}
