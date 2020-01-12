import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { routing } from './about.routing';
import { PipesModule } from '../pipes/pipes.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    routing,
    PipesModule,
    FooterModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
