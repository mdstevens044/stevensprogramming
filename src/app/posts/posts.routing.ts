import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { PostListComponent } from './post-list/post-list.component';
import { PostSingleComponent } from './post-single/post-single.component';

export const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: ':slug',
    component: PostSingleComponent
  }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes)
