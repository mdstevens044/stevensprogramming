import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { routing } from './contact.routing';
import { PipesModule } from '../pipes/pipes.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    routing,
    PipesModule,
    FooterModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
