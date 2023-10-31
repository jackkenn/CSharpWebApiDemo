import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.submitEM.subscribe((x: { username: string, password: string }) => {
      if(!this.authservice.login(x.username, x.password))
        this.error += "invalid login";
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null = "";

  @Output() submitEM = new EventEmitter();
}
