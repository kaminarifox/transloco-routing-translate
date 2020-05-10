import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';


@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    CommonModule,
    ChildRoutingModule,
    TranslocoModule,
  ],
  providers: [
    {provide: TRANSLOCO_SCOPE, useValue: ''}
  ]

})
export class ChildModule { }
