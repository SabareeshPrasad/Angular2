import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NameComponent } from './name.component';
import { ArticleComponent } from './name.component';

@NgModule({
  declarations: [
    NameComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NameComponent,ArticleComponent]
})
export class NameModule { }
// I added a class to the custom components
// Then i added it in declaration
// Then i added it in bootstrap
// But should there be so much of steps??
//main.ts is loading -> it is loading this app.module -> and this is loading the components.
// How is main.ts the default?
// The components are kept in a sep file, modules in sep file(this loads the components) and a main module loads ann.