import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/services/user/User';
import { UserService } from 'src/app/services/user/user.service';
import { NavService } from '../../nav.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-new-user-details',
  templateUrl: './new-user-details.component.html',
  styleUrls: ['./new-user-details.component.css'],
})
export class NewUserDetailsComponent {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    loginMethod: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private navService: NavService
  ) {}

  ngOnInit(): void {
    this.submitEM.subscribe(
      (form: {
        firstName: string;
        lastName: string;
        role: string;
        email: string;
        loginMethod: string;
      }) => {
        let results = this.userService
          .createUser({
            firstName: form.firstName,
            lastName: form.lastName,
            role: form.role,
            email: form.email,
            portalAccess: false,
            invitedStatus: 'not invited',
          })
          .pipe(catchError((error: HttpErrorResponse) => { this.error = error.message; return throwError(error); }))
          .subscribe({
            next: (user: User) => { this.navService.nav('company-settings'); },
          });
      }
    );
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    } else {
      this.error = 'Please fill out all the required fields';
    }
  }

  @Input() error: string | null = '';

  @Output() submitEM = new EventEmitter();
}
