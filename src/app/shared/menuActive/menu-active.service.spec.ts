import { TestBed } from '@angular/core/testing';

import { MenuActiveService } from './menu-active.service';

describe('MenuActiveService', () => {
  let service: MenuActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
