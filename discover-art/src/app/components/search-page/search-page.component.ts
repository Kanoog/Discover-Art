import { Component, Input } from '@angular/core';
import { Artist } from '../../Artist'; 
import { ArtistInfoService } from '../../services/artist-info.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  public search: string;
  public submit: string;

  [x: string]: any;

  artists: Artist[] = [];

  constructor(private artistInfoService: ArtistInfoService) { }

  ngOnInit(): void {
    this.artistInfoService.getArtists().subscribe((artists) => this.artists = artists);
  }

  onSearch(){
    if(!this.search){
      // console.log('something is happening??');
      alert('The required fields have not all been filled for submitting a search for an artist!');
      return;
    }
  }
}
