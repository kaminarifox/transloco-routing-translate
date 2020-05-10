import { TranslateUrlPipe } from './translate-url.pipe';
import {TranslocoService} from '@ngneat/transloco';
import {TestBed} from '@angular/core/testing';

describe('TranslateUrlPipe', () => {
  it('create an instance', () => {
    const translocoService = TestBed.inject(TranslocoService);
    const pipe = new TranslateUrlPipe(translocoService);
    expect(pipe).toBeTruthy();
  });
});
