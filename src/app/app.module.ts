import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './shared/dialog/example/example.component';
import { ExampleModalComponent } from './shared/dialog/example-modal/example-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ExampleModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
