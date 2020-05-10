import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRoutingTranslateModule } from '../../../transloco-routing-translate/src/lib/transloco-routing-translate.module';
import { AppRoutingModule } from './app-routing.module';
import { TranslocoRootModule } from './transloco-root.module';
import { GreetingComponent } from './greeting/greeting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    AppRoutingModule,
    TranslocoRoutingTranslateModule.forRoot({defaultLangPrefix: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
