import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslocoRoutingTranslateService {

  private shouldChangeLangOnNavigation = true;

  constructor(
    private location: Location,
    private router: Router,
    private translocoService: TranslocoService
  ) {}

  init() {
    this.setActiveLangOnNavigation();
    this.setUrlOnLanguageChange();
  }

  private setActiveLangOnNavigation() {
    this.router.events.subscribe(event => {
      const availableLangs = this.translocoService.getAvailableLangs();
      if (event instanceof NavigationStart && this.shouldChangeLangOnNavigation) {
        const urlLang = this.getUrlLang(event.url);

        if (urlLang !== this.translocoService.getActiveLang()) {
          const routeLangExists = availableLangs.findIndex((lang: any) => {
            return lang === urlLang || lang.id === urlLang;
          });

          routeLangExists !== -1
            ? this.translocoService.setActiveLang(urlLang)
            : this.translocoService.setActiveLang(this.translocoService.getDefaultLang());
        }
      }
    });
  }

  private setUrlOnLanguageChange() {
    this.translocoService.langChanges$.subscribe(lang => {
      if (lang !== this.getUrlLang()) {
        const langRegexp = new RegExp(`(\/(${this.getUrlLang()})[\/$]?)`, 'g');
        const updatedUrl = this.router.url.replace(langRegexp, (match, p1, p2) => {
          return p1.replace(`/${p2}`, `/${lang}`);
        });

        this.shouldChangeLangOnNavigation = false;
        this.router.navigateByUrl(updatedUrl, {})
          .then(() => {
            this.shouldChangeLangOnNavigation = true;
          });
      }
    });
  }

  private getUrlLang(url?: string): string {
    return url ? url.slice(1, 3) : this.router.url.slice(1, 3);
  }
}
