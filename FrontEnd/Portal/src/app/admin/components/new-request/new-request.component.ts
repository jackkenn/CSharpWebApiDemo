import { Component, ViewChild } from '@angular/core';
import { MemberDetailsFormComponent } from '../member-details-form/member-details-form.component';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent {
  @ViewChild(MemberDetailsFormComponent) memberDetailsForm!: MemberDetailsFormComponent;
}
