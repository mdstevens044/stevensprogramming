import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubComponent } from './github.component';
import { routing } from './github.routing';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    GithubComponent
  ],
  imports: [
    CommonModule,
    routing,
    FooterModule
  ],
  exports: [
    GithubComponent
  ]
})
export class GithubModule { }
