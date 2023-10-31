import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserDetailsComponent } from './new-user-details.component';

describe('NewUserDetailsComponent', () => {
  let component: NewUserDetailsComponent;
  let fixture: ComponentFixture<NewUserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserDetailsComponent]
    });
    fixture = TestBed.createComponent(NewUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
