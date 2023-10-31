import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailsFormComponent } from './member-details-form.component';

describe('MemberDetailsFormComponent', () => {
  let component: MemberDetailsFormComponent;
  let fixture: ComponentFixture<MemberDetailsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDetailsFormComponent]
    });
    fixture = TestBed.createComponent(MemberDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
