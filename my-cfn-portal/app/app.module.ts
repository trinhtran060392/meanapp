import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {AppComponent} from "./app.component";
import { UIRouterModule, UIView } from "ui-router-ng2";
import { NgModuleFactoryLoader, SystemJsNgModuleLoader } from "@angular/core";

import { MAIN_STATES } from './app.routing';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule, UIRouterModule.forRoot({
      states: MAIN_STATES,
      otherwise: { state: 'app.dashboard', params: {} },
      useHash: true
    }) ],
  declarations: [ AppComponent ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  bootstrap: [ UIView ]
})
export class AppModule { }
