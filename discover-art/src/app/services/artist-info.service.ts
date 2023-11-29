import { Injectable } from '@angular/core';
import { Artist } from '../Artist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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


}
