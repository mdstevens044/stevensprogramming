import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
               <navbar></navbar>
               <h1>Hello {{name}}</h1>
               <footer-generic></footer-generic>
            `
})

export class AppComponent  {
  name = 'Angular';
}
