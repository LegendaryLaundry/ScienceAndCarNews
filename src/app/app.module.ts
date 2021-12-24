import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsAPIService } from './service/news-api.service';
import { AutomobileComponent } from './automobile/automobile.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutomobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
