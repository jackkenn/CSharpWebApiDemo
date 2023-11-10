import { Component, Input } from '@angular/core';
import { User } from '../../../services/user/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
  constructor(private userService: UserService) {}
  displayedColumns: string[] = [
    'name',
    'role',
    'email',
    'portalAccess',
    'invitedStatus',
    'lastLogin',
  ];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => (this.dataSource = data));
  }

  @Input() dataSource!: User[];
}
