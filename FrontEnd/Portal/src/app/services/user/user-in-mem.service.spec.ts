import { TestBed } from '@angular/core/testing';

import { UserInMemService } from './user-in-mem.service';

describe('UserInMemService', () => {
  let service: UserInMemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInMemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
