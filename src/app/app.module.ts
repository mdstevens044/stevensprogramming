import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoostModule } from 'apollo-angular-boost';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './views/posts/post-list/post-list.component';
import { PostSingleComponent } from './views/posts/post-single/post-single.component';
import { GithubComponent } from './views/github/github-list/github.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloBoostModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PostListComponent,
    PostSingleComponent,
    GithubComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
