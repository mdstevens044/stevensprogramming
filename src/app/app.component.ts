import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
               <navbar></navbar>
			   <div>
                 <router-outlet></router-outlet>
                 <footer-generic></footer-generic>
			   </div>
            `
})

export class AppComponent  { }
