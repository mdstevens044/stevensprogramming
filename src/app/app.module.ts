import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, Apollo } from 'apollo-angular';
import { setContext } from 'apollo-link-context';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    ClickOutsideModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({
      uri: 'https://api.github.com/graphql'
    })

    const auth = setContext(() => ({
      headers: {
        'Authorization': `token ${environment.ghAccessToken}`,
      }
    }))

    apollo.create({
      link: auth.concat(http),
      cache: new InMemoryCache()
    });
  }
}
