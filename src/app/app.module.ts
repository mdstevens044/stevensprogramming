import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }    from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent }   from './views/home.component';
import { AboutComponent }  from './views/about.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FooterComponent, NavbarComponent, HomeComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
