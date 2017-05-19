import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }    from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent }   from './views/home.component';
import { AboutComponent }  from './views/about.component';
import { ProjectsComponent } from './views/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './views/posts/post-list/post-list.component';
import { PostSingleComponent } from './views/posts/post-single/post-single.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PostListComponent,
    PostSingleComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
