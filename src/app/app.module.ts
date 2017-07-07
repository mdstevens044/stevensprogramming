import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdInputModule, MdSidenavModule, MdListModule,
         MdDialogModule, MdButtonModule, MdGridListModule, MdExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FoldersComponent } from './views/folders/folders.component';
import { TaskComponent } from './views/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoldersComponent,
    TaskComponent
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
    MdGridListModule,
    MdExpansionModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
