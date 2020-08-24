import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsymmetricComponent } from "./asymmetric/asymmetric.component";

@NgModule({
  declarations: [
    AppComponent,
    AsymmetricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, AsymmetricComponent]
})
export class AppModule { }
