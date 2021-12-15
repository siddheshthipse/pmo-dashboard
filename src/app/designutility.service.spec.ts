import { TestBed } from '@angular/core/testing';

import { DesignutilityService } from './designutility.service';

describe('DesignutilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignutilityService = TestBed.get(DesignutilityService);
    expect(service).toBeTruthy();
  });
});
