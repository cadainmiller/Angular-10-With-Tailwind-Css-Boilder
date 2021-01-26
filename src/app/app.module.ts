import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './shared/dialog/example/example.component';
import { ExampleModalComponent } from './shared/dialog/example-modal/example-modal.component';
import { MainComponent } from './shared/main/main.component';
import { VerticalTimelineComponent } from './shared/vertical-timeline/vertical-timeline.component';
import { TailwindcssBackgroundColorComponent } from './shared/tailwindcss-background-color/tailwindcss-background-color.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { HeaderWithBackgroundImageComponent } from './shared/header-with-background-image/header-with-background-image.component';
import { ChatSupportComponent } from './shared/chat-support/chat-support.component';
import { EcommerceNavbarComponent } from './shared/ecommerce-navbar/ecommerce-navbar.component';
import { AlertComponentComponent } from './shared/alert-component/alert-component.component';
import { StatisticCardsComponent } from './shared/statistic-cards/statistic-cards.component';
import { SidebarForDashboardsComponent } from './shared/sidebar-for-dashboards/sidebar-for-dashboards.component';
import { SimpleModernModalsComponent } from './shared/simple-modern-modals/simple-modern-modals.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ExampleModalComponent,
    MainComponent,
    VerticalTimelineComponent,
    TailwindcssBackgroundColorComponent,
    ContactFormComponent,
    ProgressBarComponent,
    LandingPageComponent,
    HeaderWithBackgroundImageComponent,
    ChatSupportComponent,
    EcommerceNavbarComponent,
    AlertComponentComponent,
    StatisticCardsComponent,
    SidebarForDashboardsComponent,
    SimpleModernModalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
