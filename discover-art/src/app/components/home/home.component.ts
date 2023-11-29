import { Component } from '@angular/core';
import { ArtistInfoService } from '../../services/artist-info.service';
import { Artist } from '../../Artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  artists: Artist[] = [];

  constructor(private artistInfoService: ArtistInfoService) { }

  ngOnInit(): void {
    this.artistInfoService.getArtists().subscribe((artists) => this.artists = artists);
  }

}
