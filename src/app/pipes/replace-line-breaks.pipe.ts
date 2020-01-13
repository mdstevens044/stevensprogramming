import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLineBreaks'
})
export class ReplaceLineBreaksPipe implements PipeTransform {

  transform(value: string): string {
    if(value !== undefined)
    {
      return value.replace(new RegExp('\r?\n','g'), '<br>');
    }
  }

}
