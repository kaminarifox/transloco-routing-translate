import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {GreetingComponent} from './greeting/greeting.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingComponent,
  },
  {
    path: 'child',
    loadChildren: () => import('./child/child.module').then(m => m.ChildModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
