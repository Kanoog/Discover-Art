import { Component, Input } from '@angular/core';
import { Artist } from '../../Artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-artist',
  templateUrl: './display-artist.component.html',
  styleUrl: './display-artist.component.scss'
})
export class DisplayArtistComponent {

  @Input() artist!: Artist;

  constructor(private router: Router) {
    
   }

}
