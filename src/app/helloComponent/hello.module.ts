import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class HelloModule { }
// I added a class to the custom components
// Then i added it in declaration
// Then i added it in bootstrap
// But should there be so much of steps??
//main.ts is loading -> it is loading this app.module -> and this is loading the components.
// How is main.ts the default?
// The components are kept in a sep file, modules in sep file(this loads the components) and a main module loads ann.