import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TributesComponent } from './tributes/tributes.component';
import { TributesListComponent } from './tributes/tributes-list.component';
import { TributeFormComponent } from './tributes/tribute-form.component';

import { TributesService } from './shared/TributesService';
import { TributesSearchComponent } from './tributes/tributes-search/tributes-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TributesComponent,
    TributesListComponent,
    TributeFormComponent,
    TributesSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TributesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
