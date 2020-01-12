import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './post-list/post-list.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { routing } from './posts.routing';
import { PipesModule } from '../pipes/pipes.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    PostListComponent,
    PostSingleComponent
  ],
  imports: [
    CommonModule,
    routing,
    PipesModule,
    FooterModule
  ],
  exports: [
    PostListComponent,
    PostSingleComponent
  ]
})
export class PostsModule { }
