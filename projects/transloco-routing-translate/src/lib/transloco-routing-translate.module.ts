import { Router } from '@angular/router';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { TranslocoRoutingTranslateConfig } from './transloco-routing-translate.config';
import { TranslocoService } from '@ngneat/transloco';
import { translocoRoutingTranslateFactory } from './transloco-routing-translate-factory';
import { TranslateUrlPipe } from './translate-url.pipe';
import {TranslocoRoutingTranslateService} from './transloco-routing-translate.service';


@NgModule({
  imports: [],
  declarations: [TranslateUrlPipe],
})
export class TranslocoRoutingTranslateModule {
  static forRoot(config: TranslocoRoutingTranslateConfig): ModuleWithProviders {
    return {
      ngModule: TranslocoRoutingTranslateModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: translocoRoutingTranslateFactory,
          deps: [
            Router,
            TranslocoRoutingTranslateConfig,
            TranslocoRoutingTranslateService,
            TranslocoService
          ],
          multi: true
        },
        {
          provide: TranslocoRoutingTranslateConfig,
          useValue: config
        }
      ],
    };
  }
}
