import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import {FormsModule} from "@angular/forms";
import {TestService} from "./test.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateTimeComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
