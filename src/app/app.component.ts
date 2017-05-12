import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
               <navbar></navbar>
               <router-outlet></router-outlet>
               <footer-generic></footer-generic>
            `
})

export class AppComponent  { }
