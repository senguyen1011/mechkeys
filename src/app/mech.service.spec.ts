import { TestBed } from '@angular/core/testing';

import { MechService } from './mech.service';

describe('MechService', () => {
  let service: MechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
