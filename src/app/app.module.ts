import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TestimonyCardComponent } from "./testimony-card/testimony-card.component";
import { DownloadComponentComponent } from "./download-component/download-component.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { WhatWeDoComponent } from "./what-we-do/what-we-do.component";
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestimonyCardComponent,
    DownloadComponentComponent,
    HowItWorksComponent,
    WhatWeDoComponent,
    HeroBannerComponent,
    NavBarComponent,
    RestaurantComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
