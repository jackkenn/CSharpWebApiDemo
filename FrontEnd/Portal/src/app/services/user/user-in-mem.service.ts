import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserInMemService implements InMemoryDbService {
  createDb() {
    let authUsers = [
      new User(
        0,
        'admin',
        'admin',
        'admin@email.domain',
        true,
        'joined',
        new Date().getUTCDate(),
        'admin'
      ),
      new User(
        1,
        'user',
        'user',
        'user@email.domain',
        false,
        'joined',
        new Date().getUTCDate(),
        'user'
      ),
    ];
    return { authUsers };
  }
}
