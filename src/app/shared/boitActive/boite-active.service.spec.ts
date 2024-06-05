import { TestBed } from '@angular/core/testing';

import { BoiteActiveService } from './boite-active.service';

describe('BoiteActiveService', () => {
  let service: BoiteActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoiteActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
