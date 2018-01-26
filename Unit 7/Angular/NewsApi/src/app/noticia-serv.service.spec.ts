import { TestBed, inject } from '@angular/core/testing';

import { NoticiaServService } from './noticia-serv.service';

describe('NoticiaServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticiaServService]
    });
  });

  it('should be created', inject([NoticiaServService], (service: NoticiaServService) => {
    expect(service).toBeTruthy();
  }));
});
