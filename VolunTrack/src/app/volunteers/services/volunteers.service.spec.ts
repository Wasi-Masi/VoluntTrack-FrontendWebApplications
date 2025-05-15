import { TestBed } from '@angular/core/testing';

import { VolunteersService } from './volunteers.service'

describe('VolunteersServiceService', () => {
  let service: VolunteersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
