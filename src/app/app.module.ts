import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonyCardComponent } from './testimony-card/testimony-card.component';
import { DownloadComponentComponent } from './download-component/download-component.component';
import { PopularRestaurantsComponent } from './popular-restaurants/popular-restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestimonyCardComponent,
    DownloadComponentComponent,
    PopularRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
