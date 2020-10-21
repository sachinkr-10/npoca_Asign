import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import {MaterialModule} from './material/material.module';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { CarrierInfoComponent } from './components/carrier-info/carrier-info.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SessionsComponent,
    SpeakersComponent,
    CarrierInfoComponent,
    ContactUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
