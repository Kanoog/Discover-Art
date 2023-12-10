import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExporePageComponent } from './components/expore-page/expore-page.component';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { DisplayArtistComponent } from './components/display-artist/display-artist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditArtistsComponent } from './components/edit-artists/edit-artists.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExporePageComponent },
  { path: 'artist/:id', component: ArtistPageComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'edit', component: EditArtistsComponent },
  { path: '**', component: PageNotFoundComponent }
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
    SearchPageComponent,
    DisplayArtistComponent,
    EditArtistsComponent,
    NewsletterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
