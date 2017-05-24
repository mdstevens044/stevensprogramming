import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdButtonModule, MdCardModule, MdToolbarModule, MdProgressSpinnerModule } from '@angular/material';

import { AppComponent }    from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent }   from './views/home.component';
import { AboutComponent }  from './views/about.component';
import { ProjectsComponent } from './views/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './views/posts/post-list/post-list.component';
import { PostSingleComponent } from './views/posts/post-single/post-single.component';
import { GithubComponent } from './views/github/github-list/github.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdProgressSpinnerModule
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
