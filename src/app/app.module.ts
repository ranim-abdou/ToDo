import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntefaceComponent } from './inteface/inteface.component';
import { ServiceComponent } from './service/service.component';
import { TodoComponent } from './todo/todo.component';
import { PagesComponent } from './pages/pages.component';
import { CompleteComponent } from './complete/complete.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    IntefaceComponent,
    ServiceComponent,
    TodoComponent,
    PagesComponent,
    CompleteComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
