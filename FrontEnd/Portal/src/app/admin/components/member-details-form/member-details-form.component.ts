import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-member-details-form',
  templateUrl: './member-details-form.component.html',
  styleUrls: ['./member-details-form.component.css']
})
export class MemberDetailsFormComponent {
  eligibilityCheck = this.fb.group({
    firstCrtl: ['', Validators.required],
  });
  
  constructor(private fb: FormBuilder) { }
}
