import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AsymmetricComponent]
})
export class AppModule { }
