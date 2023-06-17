import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app/app.routes';

  bootstrapApplication(AppComponent, {
    providers: [
      provideClientHydration(),
      provideRouter(appRoutes,
        withEnabledBlockingInitialNavigation()
      )
    ]
  })
