import { TestBed, inject } from '@angular/core/testing';

import { GService } from './g.service';

describe('GService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GService]
    });
  });

  it('should be created', inject([GService], (service: GService) => {
    expect(service).toBeTruthy();
  }));
});
