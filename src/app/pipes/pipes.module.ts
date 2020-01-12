import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaceLineBreaksPipe } from './replace-line-breaks.pipe';

@NgModule({
  declarations: [
    ReplaceLineBreaksPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplaceLineBreaksPipe
  ]
})
export class PipesModule { }
