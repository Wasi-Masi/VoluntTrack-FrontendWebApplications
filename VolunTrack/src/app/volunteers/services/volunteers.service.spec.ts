import { TestBed } from '@angular/core/testing';

import { VolunteersServiceService } from './volunteers.service';

describe('VolunteersServiceService', () => {
  let service: VolunteersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
