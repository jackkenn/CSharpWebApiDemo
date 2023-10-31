import { Component } from '@angular/core';
import { User } from '../../../services/user/User';

const USER_DATA: User[] = [
  new User(
    'admin',
    'admin',
    'admin@email.domain',
    true,
    'joined',
    new Date().getUTCDate(),
    'admin'
  ),
  new User(
    'user',
    'user',
    'user@email.domain',
    false,
    'joined',
    new Date().getUTCDate(),
    'user'
  ),
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
  displayedColumns: string[] = [
    'name',
    'role',
    'email',
    'portalAccess',
    'invitedStatus',
    'lastLogin',
  ];
  dataSource = USER_DATA;
}
