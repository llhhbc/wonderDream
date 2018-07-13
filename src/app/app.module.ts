import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DreammapComponent } from './dreammap/dreammap.component';
import { MemoryComponent } from './memory/memory.component';
import { WordlinkComponent } from './memory/wordlink/wordlink.component';

@NgModule({
  declarations: [
    AppComponent,
    DreammapComponent,
    MemoryComponent,
    WordlinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
