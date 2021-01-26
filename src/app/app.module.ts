import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './shared/dialog/example/example.component';
import { ExampleModalComponent } from './shared/dialog/example-modal/example-modal.component';
import { MainComponent } from './shared/main/main.component';
import { VerticalTimelineComponent } from './shared/vertical-timeline/vertical-timeline.component';
import { TailwindcssBackgroundColorComponent } from './shared/tailwindcss-background-color/tailwindcss-background-color.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ExampleModalComponent,
    MainComponent,
    VerticalTimelineComponent,
    TailwindcssBackgroundColorComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
