import { Injectable } from '@angular/core';
import { Artist } from '../Artist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// Data is coming from db.json and watched by json-server - see package.json scripts
// port is specified in pack.json scripts

@Injectable({
  providedIn: 'root'
})
export class ArtistInfoService {

  private apiUrl = 'http://localhost:5000/artists';

  constructor(private http:HttpClient) { }
  

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl)
  }

  getArtist(id: number | string) {
    return this.getArtists().pipe(
      // (+) before `id` turns the string into a number
      map((artists: Artist[]) => artists.find(artist => artist.id === +id)!)
    );
  }

  addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist, httpOptions);
  }
  
  deleteArtist(artist: Artist): Observable<Artist> {
    const url = `${this.apiUrl}/${artist.id}`;
    return this.http.delete<Artist>(url);
  }


}
