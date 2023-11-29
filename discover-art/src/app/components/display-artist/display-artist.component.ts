import { Component, Input } from '@angular/core';
import { Artist } from '../../Artist';

@Component({
  selector: 'app-display-artist',
  templateUrl: './display-artist.component.html',
  styleUrl: './display-artist.component.scss'
})
export class DisplayArtistComponent {

  @Input() artist!: Artist;

}
