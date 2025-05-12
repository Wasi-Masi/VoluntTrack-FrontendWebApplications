import { TestBed } from '@angular/core/testing';

import { RegisteredVolunteersService } from './registered-volunteers.service';

describe('RegisteredVolunteersService', () => {
  let service: RegisteredVolunteersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredVolunteersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
