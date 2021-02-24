import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AppRoutingModule} from './app.routing.module';
import { LineitemsTable } from './line-items/line-items.component';


@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    LineitemsTable
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  entryComponents: [VendorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
