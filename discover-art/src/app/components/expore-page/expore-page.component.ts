import { Component } from '@angular/core';
import { Artist } from '../../Artist';
import { ArtistInfoService } from '../../services/artist-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expore-page',
  templateUrl: './expore-page.component.html',
  styleUrl: './expore-page.component.scss'
})
export class ExporePageComponent {
  [x: string]: any;

  artists: Artist[] = [];

  constructor(private artistInfoService: ArtistInfoService, private router: Router) { }

  ngOnInit(): void {
    this.artistInfoService.getArtists().subscribe((artists) => this.artists = artists);
  }

  navigateToArtist(artistId: number): void {
    this.router.navigate(['/artist', artistId]);
  }

}
