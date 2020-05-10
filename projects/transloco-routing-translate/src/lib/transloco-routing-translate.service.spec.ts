import { TestBed } from '@angular/core/testing';

import { TranslocoRoutingTranslateService } from './transloco-routing-translate.service';

describe('TranslocoRoutingTranslateService', () => {
  let service: TranslocoRoutingTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslocoRoutingTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
