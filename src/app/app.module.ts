import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import { FormsComponent } from './forms/forms.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TodoFilterPipe} from './shared/todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FormsComponent,
    TodoFilterPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
