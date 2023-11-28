import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExporePageComponent } from './components/expore-page/expore-page.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ExporePageComponent,
    ArtistPageComponent,
    AboutUsPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
