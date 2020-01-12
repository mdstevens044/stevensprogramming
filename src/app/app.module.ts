import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, Apollo } from 'apollo-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'environments/environment';

import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { GithubModule } from './github/github.module';
import { PostsModule } from './posts/posts.module';
import { FooterModule } from './footer/footer.module';
import { PipesModule } from './pipes/pipes.module';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    FormsModule,
    BrowserAnimationsModule,
    AboutModule,
    ContactModule,
    GithubModule,
    PostsModule,
    FooterModule,
    PipesModule
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
    apollo.create({
      link: httpLink.create({ uri: environment.ghEndPoint }),
      cache: new InMemoryCache()
    });
    apollo.create({
      link: httpLink.create({ uri: environment.graphCms }),
      cache: new InMemoryCache()
    }, 'graphCms');
  }
}
