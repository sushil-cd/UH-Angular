import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UhNavBarComponent } from './uh-nav-bar/uh-nav-bar.component';
import { AppUhBarComponent } from './app-uh-bar/app-uh-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    UhNavBarComponent,
    AppUhBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
