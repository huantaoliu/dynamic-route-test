import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppCustomLogic,
      multi: true,
      deps: [Router],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initializeAppCustomLogic(router: Router): () => Promise<void> {
  return () =>
    new Promise((resolve) => {
      console.log('***process custom logic, Angular init***');

      router.resetConfig([
        ...routes,
        {
          path: 'dynamic',
          component: DynamicComponent,
        },
      ]);

      setTimeout(() => {
        console.log(
          '***3 seconds latter, custom logic finished, Angular init***'
        );
        resolve();
      }, 3000);
    });
}
