import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './views/home.component';
import { AboutComponent }  from './views/about.component';
import { ProjectsComponent }  from './views/projects.component';
import { PostListComponent } from './views/posts/post-list/post-list.component';
import {PostSingleComponent} from './views/posts/post-single/post-single.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'blog',
    component: PostListComponent
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
