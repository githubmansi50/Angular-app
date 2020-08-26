import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsymmetricComponent } from "./asymmetric/asymmetric.component";
import { SymmetricComponent } from './symmetric/symmetric.component';

@NgModule({
  declarations: [
    AppComponent,
    AsymmetricComponent,
    SymmetricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, AsymmetricComponent,SymmetricComponent]
  
})
export class AppModule { }
