import {Router} from '@angular/router';
import {TranslocoService} from '@ngneat/transloco';
import {TranslocoRoutingTranslateConfig} from './transloco-routing-translate.config';
import {TranslocoRoutingTranslateService} from './transloco-routing-translate.service';

export function translocoRoutingTranslateFactory(
  router: Router,
  config: TranslocoRoutingTranslateConfig,
  service: TranslocoRoutingTranslateService,
  translocoService: TranslocoService
) {
  return () => {
    const defaultLang = translocoService.getDefaultLang();
    const availableLangs = translocoService.getAvailableLangs();

    const currentConfig = router.config;
    const translatedRoutes = [];

    currentConfig.forEach(route => {
      translatedRoutes.push(route);
      availableLangs.forEach(lang => {
        const langRoute: any = {...route};
        langRoute.path = lang + (route.path && `/${route.path}`);
        if (!config.defaultLangPrefix && lang === defaultLang) {
            translatedRoutes.push({path: langRoute.path, redirectTo: route.path});
        } else {
          translatedRoutes.push(langRoute);
        }
      });
    });

    router.resetConfig(translatedRoutes);
    service.init();
  };
}
