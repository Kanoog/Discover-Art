import { Component, EventEmitter, Output } from '@angular/core';
import { ArtistInfoService } from '../../services/artist-info.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Artist } from '../../Artist';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-edit-artists',
  templateUrl: './edit-artists.component.html',
  styleUrl: './edit-artists.component.scss'
})
export class EditArtistsComponent {

  artists: Artist[] = [];
  temp: number = 0;
  faTimes = faTimes;

  id: number =0;
  artistName: string = '';
  age!: number;
  hometown: string = '';
  dateOfBirth: string = '';
  bio: string = '';
  image: string = '';
  image2: string = '';
  image3: string = '';

  subscription!: Subscription;
  @Output() onAddTask: EventEmitter<Artist> = new EventEmitter();

  constructor(private artistInfoService: ArtistInfoService, private router: Router) {
    this.artistInfoService.getArtists().subscribe((artists) => this.artists = artists)
   }

   onSubmit() {
    if (!this.artistName) {
      alert('Please add a artistName');
      return;
    }

    this.temp = this.artists.length + 1;

    const newTask = {
      name: this.artistName,
      age: this.age,
      hometown: this.hometown,
      dateOfBirth: this.dateOfBirth,
      bio: this.bio,
      image: this.image,
      image2: this.image2,
      image3: this.image3,
      id: this.temp
    }

    // Emit event
    this.addTask(newTask);

    this.artistName = '';
    this.age = 0;
    this.hometown = '';
    this.dateOfBirth = '';
    this.bio = '';
    this.image = '';
    this.image2 = '';
    this.image3 = '';
    this.id = 0;
  }

   addTask(artist: Artist) {
    console.log("ADD TASK: " + artist);
    this.artistInfoService.addArtist(artist).subscribe((artist) => (this.artists.push(artist)));
  }

  deleteTask(artist: Artist) {
    this.artistInfoService.deleteArtist(artist).subscribe(() => this.artists = this.artists.filter(t => t.id !== artist.id));
  }

  onToggle() {
    console.log('toggle');
    
  }

}
