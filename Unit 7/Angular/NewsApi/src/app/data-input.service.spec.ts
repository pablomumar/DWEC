import { TestBed, inject } from '@angular/core/testing';

import { DataInputService } from './data-input.service';

describe('DataInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataInputService]
    });
  });

  it('should be created', inject([DataInputService], (service: DataInputService) => {
    expect(service).toBeTruthy();
  }));
});
