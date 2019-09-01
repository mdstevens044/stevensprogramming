import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { PostListComponent } from './views/posts/post-list/post-list.component';
import { PostSingleComponent } from './views/posts/post-single/post-single.component';
import { GithubComponent } from './views/github/github.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },/*
  {
    path: 'projects',
    component: ProjectsComponent
  },*/
  {
    path: 'github',
    component: GithubComponent
  },
  {
    path: 'blog',
    component: PostListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: ':slug',
    component: PostSingleComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
