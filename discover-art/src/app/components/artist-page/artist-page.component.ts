import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArtistInfoService } from '../../services/artist-info.service';
import { Artist } from '../../Artist';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.scss'
})
export class ArtistPageComponent {

  // wanted to make sure my activated route from the home & Explore components were working 
  // so I added this artistId property to the artist-page component
  // and then added the artistId to the artist-page.component.html file
  // referenced this video on how to do it: https://www.youtube.com/watch?v=r5DEBMuStPw

  artistId: number = 0;

  artist$!: Observable<Artist>;

  route: ActivatedRoute = inject(ActivatedRoute);


  constructor(private artistInfoService: ArtistInfoService, private router: Router) {
      this.artistId = Number(this.route.snapshot.paramMap.get('id'));
      this.artist$ = this.route.paramMap.pipe(
         switchMap((params: ParamMap) =>
            this.artistInfoService.getArtist(params.get('id')!))
      )
   }

}
