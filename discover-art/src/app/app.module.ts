import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExporePageComponent } from './components/expore-page/expore-page.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExporePageComponent },
  { path: 'artist', component: ArtistPageComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'search', component: SearchPageComponent }
]

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
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
