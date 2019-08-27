import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, Apollo } from 'apollo-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './views/posts/post-list/post-list.component';
import { PostSingleComponent } from './views/posts/post-single/post-single.component';
import { GithubComponent } from './views/github/github.component';
import { ContactComponent } from './views/contact/contact.component';
import { SentComponent } from './views/contact/sent/sent.component';
import { environment } from 'environments/environment';
import { ReplaceLineBreaksPipe } from './pipes/replace-line-breaks.pipe';

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
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PostListComponent,
    PostSingleComponent,
    GithubComponent,
    ContactComponent,
    SentComponent,
    ReplaceLineBreaksPipe
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  exports: [ReplaceLineBreaksPipe]
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
