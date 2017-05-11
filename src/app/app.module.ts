import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }    from './app.component';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FooterComponent, NavbarComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
