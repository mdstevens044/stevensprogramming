import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdInputModule, MdSidenavModule, MdListModule, MdDialogModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FoldersComponent } from './views/folders/folders.component';
import { AddDialogComponent } from './views/folders/add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoldersComponent,
    AddDialogComponent
  ],
  exports: [
    AddDialogComponent
  ],
  entryComponents: [
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdInputModule,
    MdSidenavModule,
    MdListModule,
    MdDialogModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
