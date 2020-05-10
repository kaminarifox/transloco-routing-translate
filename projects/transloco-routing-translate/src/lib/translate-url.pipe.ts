import { Pipe, PipeTransform } from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Pipe({
  name: 'translateUrl'
})
export class TranslateUrlPipe implements PipeTransform {

  availableLangs: any[] = [];

  constructor(private translocoService: TranslocoService) {
    this.availableLangs = translocoService.getAvailableLangs();
  }

  transform(value: string, ...args: unknown[]): unknown {
    const isFullPath = value.startsWith('/');
    const urlLang = isFullPath ? value.slice(1, 3) : value.slice(0, 2);

    const urlTranslated = this.availableLangs.find(lang => {
      return lang === urlLang || lang.id === urlLang;
    });

    if (!urlTranslated) {
      return (isFullPath ? '/' : '')
        + this.translocoService.getActiveLang()
        + (isFullPath ? '' : '/')
        + value;
    }

    return value;
  }
}

