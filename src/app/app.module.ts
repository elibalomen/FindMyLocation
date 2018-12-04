import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsService } from './google-maps.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBon4PXD6sA5y8_cIalZG9trOa95ypjCOM',
      libraries: ["places"]
    }),
    HttpClientModule
  ],
  providers: [GoogleMapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
